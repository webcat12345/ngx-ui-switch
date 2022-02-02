import { from as observableFrom, forkJoin as observableForkJoin, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { copy, outputFile } from 'fs-extra';
import { render } from 'sass';

const pkg = require(`${process.cwd()}/package.json`);
const cssProcessConfig = {
  inputPath: `${process.cwd()}/src/lib/ui-switch/`,
  outputPath: `${process.cwd()}/dist/`,
  filename: 'ui-switch.component',
};

function getVersions() {
  const paths = [`${process.cwd()}/dist/package.json`];
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

function copyFiles() {
  console.log('copying files');
  return observableForkJoin([
    observableFrom(copy(`${process.cwd()}/LICENSE`, `${process.cwd()}/dist/LICENSE`)),
    observableFrom(copy(`${process.cwd()}/README.md`, `${process.cwd()}/dist/README.md`)),
    observableFrom(copy(`${process.cwd()}/logo.png`, `${process.cwd()}/dist/logo.png`)),
    observableFrom(
      copy(
        `${cssProcessConfig.inputPath}${cssProcessConfig.filename}.scss`,
        `${cssProcessConfig.outputPath}${cssProcessConfig.filename}.scss`
      )
    ),
  ]);
}

function compileCss() {
  console.log('compiling css');
  return new Observable(observer => {
    render(
      { file: `${cssProcessConfig.inputPath}${cssProcessConfig.filename}.scss` },
      (error, compiled) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(compiled);
        }
      }
    );
  });
}

function saveCss(compiled) {
  return observableFrom(
    outputFile(`${cssProcessConfig.outputPath}${cssProcessConfig.filename}.css`, compiled.css)
  );
}

function buildLibrary() {
  const copyFiles$ = copyFiles();
  return copyFiles$.pipe(
    switchMap(() => compileCss()),
    switchMap(result => saveCss(result)),
    tap(() => verifyVersions())
  );
}

buildLibrary().subscribe(
  () => console.log('success'),
  err => console.log('err', err),
  () => console.log('complete')
);
