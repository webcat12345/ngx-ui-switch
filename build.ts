// from https://github.com/angular/angularfire2/blob/master/tools/build.js
import { rollup } from 'rollup';
import { spawn } from 'child_process';
import {
  bindCallback as observableBindCallback,
  from as observableFrom,
  forkJoin as observableForkJoin,
  Observable,
} from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { copy, outputFile } from 'fs-extra';
import { render } from 'node-sass';
import * as copyfiles from 'copy';
import * as filesize from 'rollup-plugin-filesize';
import * as sourcemaps from 'rollup-plugin-sourcemaps';

const pkg = require(`${process.cwd()}/package.json`);
const cssProcessConfig = {
  inputPath: `${process.cwd()}/src/lib/ui-switch/`,
  outputPath: `${process.cwd()}/dist/packages-dist/`,
  filename: 'ui-switch.component',
};

// Rollup globals
const GLOBALS = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/animations': 'ng.animations',
  '@angular/platform-browser': 'ng.platformBrowser',
  rxjs: 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/Subscription': 'Rx',
};

// Constants for running typescript commands
const NGC = './node_modules/.bin/ngc';
const TSC_ARGS = (config = 'build') => [`-p`, `${process.cwd()}/src/lib/tsconfig-${config}.json`];

/**
 * Create an Observable of a spawned child process.
 * @param {string} command
 * @param {string[]} args
 */
function spawnObservable(command, args) {
  return new Observable(observer => {
    const cmd = spawn(command, args);
    observer.next(''); // hack to kick things off, not every command will have a stdout
    cmd.stdout.on('data', data => {
      observer.next(data.toString());
    });
    cmd.stderr.on('data', data => {
      observer.error(data.toString());
    });
    cmd.on('close', data => {
      observer.complete();
    });
  });
}

function generateBundle(input, file, globals, name, format) {
  const plugins = [sourcemaps(), filesize()];
  return rollup({
    input,
    external: Object.keys(globals),
    file,
    plugins,
  }).then(bundle => {
    console.log(file);
    return bundle.write({
      file,
      name,
      globals,
      format,
      sourcemap: true,
    });
  });
}

function createUmd(globals) {
  const name = 'ngx-ui-switch';
  const entry = `${process.cwd()}/dist/es5/index.js`;
  return generateBundle(
    entry,
    `${process.cwd()}/dist/packages-dist/ui-switch.umd.js`,
    globals,
    name,
    'umd'
  );
}

function createEs(globals, target) {
  const name = 'ngx-ui-switch';
  const entry = `${process.cwd()}/dist/${target}/index.js`;
  return generateBundle(
    entry,
    `${process.cwd()}/dist/packages-dist/ui-switch.${target}.js`,
    globals,
    name,
    'es'
  );
}

function getVersions() {
  const paths = [`${process.cwd()}/dist/packages-dist/package.json`];
  return paths.map(path => require(path)).map(pkgs => pkgs.version);
}

function verifyVersions() {
  const versions = getVersions();
  console.log(versions);
  versions.map(version => {
    if (version !== pkg.version) {
      throw new Error('Versions mismatch');
    }
  });
}

function buildModule(globals) {
  const es2015$ = spawnObservable(NGC, TSC_ARGS());
  const esm$ = spawnObservable(NGC, TSC_ARGS('esm'));
  return observableForkJoin(es2015$, esm$);
}

function createBundles(globals) {
  return observableForkJoin(
    observableFrom(createUmd(globals)),
    observableFrom(createEs(globals, 'es2015')),
    observableFrom(createEs(globals, 'es5'))
  );
}

function copyFiles() {
  const copyAll: ((s: string, s1: string) => any) = observableBindCallback(copyfiles);
  return observableForkJoin(
    copyAll(`${process.cwd()}/dist/es5/**/*.d.ts`, `${process.cwd()}/dist/packages-dist`),
    copyAll(`${process.cwd()}/dist/es5/**/*.metadata.json`, `${process.cwd()}/dist/packages-dist`),
    observableFrom(
      copy(`${process.cwd()}/README.md`, `${process.cwd()}/dist/packages-dist/README.md`)
    ),
    observableFrom(
      copy(`${process.cwd()}/logo.png`, `${process.cwd()}/dist/packages-dist/logo.png`)
    ),
    observableFrom(
      copy(
        `${process.cwd()}/src/lib/package.json`,
        `${process.cwd()}/dist/packages-dist/package.json`
      )
    ),
    observableFrom(
      copy(
        `${cssProcessConfig.inputPath}${cssProcessConfig.filename}.scss`,
        `${cssProcessConfig.outputPath}${cssProcessConfig.filename}.scss`
      )
    )
  );
}

function compileCss() {
  return new Observable(observer => {
    render(
      { file: `${cssProcessConfig.inputPath}${cssProcessConfig.filename}.scss` },
      (err, compiled) => observer.next(compiled)
    );
  });
}

function saveCss(compiled) {
  return observableFrom(
    outputFile(`${cssProcessConfig.outputPath}${cssProcessConfig.filename}.css`, compiled.css)
  );
}

function buildLibrary(globals) {
  const modules$ = buildModule(globals);
  return observableForkJoin(modules$).pipe(
    switchMap(() => createBundles(globals)),
    switchMap(() => copyFiles()),
    switchMap(() => compileCss()),
    switchMap(result => saveCss(result)),
    tap(() => verifyVersions())
  );
}

buildLibrary(GLOBALS).subscribe(
  data => console.log('success'),
  err => console.log('err', err),
  () => console.log('complete')
);
