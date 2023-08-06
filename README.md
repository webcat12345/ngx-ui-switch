# Angular UI Switch Component

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ngx-discuss/Lobby)
[![Build Status](https://travis-ci.org/webcat12345/ngx-ui-switch.svg?branch=master)](https://travis-ci.org/webcat12345/ngx-ui-switch)
[![license](https://img.shields.io/github/license/webcat12345/ngx-ui-switch)](https://github.com/webcat12345/ngx-ui-switch/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/ngx-ui-switch.svg)](https://badge.fury.io/js/ngx-ui-switch)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/ngx-ui-switch)
[![All Contributors](https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square)](#contributors)

## Description

This is a simple iOS 7 style switch component for [Angular](https://angular.io).

Live [demo](https://webcat12345.github.io/ngx-ui-switch/demo/)

A [stackblitz](https://stackblitz.com) is also available [here](https://stackblitz.com/edit/ngx-ui-switch)

![alt](logo.png)

Inspired by [switchery](https://github.com/abpetkov/switchery) in [Angular](https://angular.io).

## Installation

npm: `npm install ngx-ui-switch --save`

yarn: `yarn add ngx-ui-switch`

**Some features are not available in previous versions:**

- CSS styling
- Switch content (checkedLabel, uncheckedLabel) [#309](https://github.com/webcat12345/ngx-ui-switch/issues/309) [#343](https://github.com/webcat12345/ngx-ui-switch/issues/343)
- Global options
- beforeChange event [#314](https://github.com/webcat12345/ngx-ui-switch/issues/314) [#359](https://github.com/webcat12345/ngx-ui-switch/pull/359)

## Usage

- Import into a module (`AppModule` example below)

```javascript
// app.module.ts
import { UiSwitchModule } from 'ngx-ui-switch';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, UiSwitchModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- Add default css file to appropriate project(s) `angular.json`

```json
"styles": [
  "src/styles.css",
  "./node_modules/ngx-ui-switch/ui-switch.component.css"
]
```

Alternatively, the scss version can be imported into a scss file:

```scss
@import '~ngx-ui-switch/ui-switch.component.scss';
```

## Global config

Use when you want to change default values globally.

These settings will override anything passed in via property bindings.

```javascript
import { UiSwitchModule } from 'ngx-ui-switch';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    UiSwitchModule.forRoot({
      size: 'small',
      color: 'rgb(0, 189, 99)',
      switchColor: '#80FFA2',
      defaultBgColor: '#00ACFF',
      defaultBoColor : '#476EFF',
      checkedLabel: 'on',
      uncheckedLabel: 'off'
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```html
<ui-switch></ui-switch>
```

Note that if you are using the switch in a child `NgModule`, such as a lazy loaded module, then you must also import the module in the module itself or within a shared module. Otherwise you will get the error that it is an unknown component as seen in issue [#227](https://github.com/webcat12345/ngx-ui-switch/issues/227).

# Two way binding

```html
<ui-switch [(ngModel)]="enable"></ui-switch>
```

# Params

### checked

> type: *boolean*

> default: false

```html
<ui-switch checked></ui-switch>
<ui-switch [checked]="false"></ui-switch>
```

### disabled

> type: *boolean*

> default: false

```html
<ui-switch disabled></ui-switch>
<ui-switch checked [disabled]="true"></ui-switch>
```

### loading

*Show a loading state for the toggle button when true. Often utilized with beforeChange.*

> type: *boolean*

> default: false

```html
<ui-switch [loading]="isLoading">
  <i class="fa fa-spinner fa-pulse" *ngIf="isLoading"></i>
</ui-switch>
```

### change

> type: *boolean*

> default: noop

```html
<ui-switch (change)="onChange($event)"></ui-switch>
```

### changeEvent

> type: *MouseEvent*

> default: noop

```html
<ui-switch (changeEvent)="onChangeEvent($event)"></ui-switch>
<ui-switch (changeEvent)="$event.stopPropagation()"></ui-switch>
```

### valueChange

> type: *boolean*

> default: noop

```html
<ui-switch (valueChange)="onValueChange($event)"></ui-switch>
```

### beforeChange

Utilize an observable to check that the toggle event should complete

> type: *Observable\<boolean\>*

> default: noop

```html
<ui-switch [beforeChange]="OnBeforeChange">
</ui-switch>
```

```typescript
OnBeforeChange: Observable<boolean> = new Observable((observer) => {
  const timeout = setTimeout(() => {
    observer.next(true);
  }, 2000);
  return () => clearTimeout(timeout);
});
```

### size

> type: *string*

> default: medium

```html
<ui-switch size="small"></ui-switch>
<ui-switch size="large"></ui-switch>
```

### reverse

> type: *boolean*

> default: false

```html
<ui-switch reverse></ui-switch>
```

### color

> type: *string*

> default: rgb(100, 189, 99)

```html
<ui-switch color="red"></ui-switch>
```

### switchColor

> type: *string*

> default: #fff


```html
<ui-switch switchColor="#fcfcfc"></ui-switch>
```

### defaultBgColor

Default background color

> type: *string*

> default: #fff


```html
<ui-switch defaultBgColor="red"></ui-switch>
```

### defaultBoColor

*Default border color*

> type: *string*

> default: #dfdfdf


```html
<ui-switch defaultBoColor="black"></ui-switch>
```

### checkedLabel

*Checked label (on)*

> type: *string*

> default: null


```html
<ui-switch checkedLabel="on"></ui-switch>
```

### uncheckedLabel

*Unchecked label (off)*

> type: *string*

> default: null

```html
<ui-switch uncheckedLabel="off"></ui-switch>
```

### checkedTextColor

checked text color of the label (on)

> type: *string*

> default: black

```html
<ui-switch checkedTextColor="#7CFC00"></ui-switch>
```

### uncheckedTextColor

Unchecked text color of the label (off)

> type: *string*

> default: black

```html
<ui-switch uncheckedTextColor="red"></ui-switch>
```

## Switch Content

```html
<ui-switch uncheckedLabel="off">
  <img src=""/>
</ui-switch>
```

## Aria Label

```html
<ui-switch [ariaLabel]="'labelName'"></ui-switch>
```

## Development

### Setup

```sh
yarn install
```

### Demo

Edit files in `src/app` to add to the demo or try changes to the library.

### Build library

*First, edit version in `package.json` and `src/lib/package.json` to publish a new version to npmjs.org*

```sh
# Build the library into dist/{es5,es2015}
yarn build
# Publish to npm
yarn release
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/19761422?v=4" width="100px;" alt="webcat_black"/><br /><sub><b>webcat_black</b></sub>](https://webcat12345.github.io/)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=webcat12345 "Code") [🎨](#design-webcat12345 "Design") [💡](#example-webcat12345 "Examples") [🤔](#ideas-webcat12345 "Ideas, Planning, & Feedback") [👀](#review-webcat12345 "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/735717?v=4" width="100px;" alt="Chris McKnight"/><br /><sub><b>Chris McKnight</b></sub>](https://github.com/cmckni3)<br />[💬](#question-cmckni3 "Answering Questions") [💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=cmckni3 "Code") [📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=cmckni3 "Documentation") [🤔](#ideas-cmckni3 "Ideas, Planning, & Feedback") [🚇](#infra-cmckni3 "Infrastructure (Hosting, Build-Tools, etc)") [🔌](#plugin-cmckni3 "Plugin/utility libraries") [👀](#review-cmckni3 "Reviewed Pull Requests") [🔧](#tool-cmckni3 "Tools") | [<img src="https://avatars0.githubusercontent.com/u/302721?v=4" width="100px;" alt="Jakub"/><br /><sub><b>Jakub</b></sub>](https://github.com/kubiq)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=kubiq "Code") [📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=kubiq "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/915077?v=4" width="100px;" alt="Serhii Kovalenko"/><br /><sub><b>Serhii Kovalenko</b></sub>](https://github.com/cmajsmith)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=cmajsmith "Code") [💡](#example-cmajsmith "Examples") [📦](#platform-cmajsmith "Packaging/porting to new platform") | [<img src="https://avatars1.githubusercontent.com/u/1156100?v=4" width="100px;" alt="Richard McSharry"/><br /><sub><b>Richard McSharry</b></sub>](https://github.com/rmcsharry)<br />[📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=rmcsharry "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/507874?v=4" width="100px;" alt="bitsprint"/><br /><sub><b>bitsprint</b></sub>](https://github.com/bitsprint)<br />[🚇](#infra-bitsprint "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-bitsprint "Packaging/porting to new platform") [🔧](#tool-bitsprint "Tools") | [<img src="https://avatars0.githubusercontent.com/u/11628507?v=4" width="100px;" alt="Gianluca Paronitti"/><br /><sub><b>Gianluca Paronitti</b></sub>](http://www.gamepix.com)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=gparonitti "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/5429780?v=4" width="100px;" alt="Milos Bejda"/><br /><sub><b>Milos Bejda</b></sub>](http://mbejda.com)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=mbejda "Code") [📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=mbejda "Documentation") [💡](#example-mbejda "Examples") | [<img src="https://avatars1.githubusercontent.com/u/590274?v=4" width="100px;" alt="kameelyan"/><br /><sub><b>kameelyan</b></sub>](https://github.com/kameelyan)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=kameelyan "Code") [📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=kameelyan "Documentation") [💡](#example-kameelyan "Examples") | [<img src="https://avatars0.githubusercontent.com/u/20248805?v=4" width="100px;" alt="Grégory Alary"/><br /><sub><b>Grégory Alary</b></sub>](https://gregoryalary.github.io/)<br />[💬](#question-gregoryalary "Answering Questions") [🐛](https://github.com/webcat12345/ngx-ui-switch/issues?q=author%3Agregoryalary "Bug reports") [💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=gregoryalary "Code") [🎨](#design-gregoryalary "Design") | [<img src="https://avatars2.githubusercontent.com/u/2574403?v=4" width="100px;" alt="zehtravassos"/><br /><sub><b>zehtravassos</b></sub>](https://github.com/zehtravassos)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=zehtravassos "Code") [🎨](#design-zehtravassos "Design") | [<img src="https://avatars0.githubusercontent.com/u/18656830?v=4" width="100px;" alt="H. Rüger"/><br /><sub><b>H. Rüger</b></sub>](https://github.com/hrueger)<br />[🐛](https://github.com/webcat12345/ngx-ui-switch/issues?q=author%3Ahrueger "Bug reports") [💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=hrueger "Code") [🚧](#maintenance-hrueger "Maintenance") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
