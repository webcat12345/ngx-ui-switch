# Ngx UI Switch Component
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ngx-discuss/Lobby)
[![Build Status](https://travis-ci.org/webcat12345/ngx-ui-switch.svg?branch=master)](https://travis-ci.org/webcat12345/ngx-ui-switch) [![npm version](https://badge.fury.io/js/ngx-ui-switch.svg)](https://badge.fury.io/js/ngx-ui-switch) [![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/ngx-ui-switch)
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors)

## Description

This is a simple iOS 7 style switch component for [Angular](https://angular.io).

Live [demo](https://webcat12345.github.io/ngx-ui-switch/demo/)

A [stackblitz](https://stackblitz.com) is also available [here](https://stackblitz.com/edit/ngx-ui-switch)

![alt](logo.png)

Inspired by [switchery](https://github.com/abpetkov/switchery) in [Angular](https://angular.io).

## Installation

### Angular v4

Angular v5/v6 uses a different metadata version for decorators, therefore, the
Angular v4 compatible versions of this library are 1.4.4 and below. However,
versions < 1.6.0 have been deprecated to avoid the confusion brought up in
issue [#219](https://github.com/webcat12345/ngx-ui-switch/issues/219)

The code in the [1.x-stable](https://github.com/webcat12345/ngx-ui-switch/tree/1.x-stable)
branch contains the Angular v4 code.

*Note: The Angular v4 branch will only receive bug fixes.*

```sh
yarn add ngx-ui-switch@^1.6.0
# npm install ngx-ui-switch@^1.6.0 --save
```

### Beyond Angular v4

The master branch will contain the latest code for the latest version of Angular.
When upgrading this library to a new version of Angular, a new _x.y-stable_
branch will be created to allow bugfixes. Below is how to install the latest
version of the library.

```sh
yarn add ngx-ui-switch
# npm install ngx-ui-switch --save
```

## Usage

* Import into a module (`AppModule` example below)

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

* Add default css file to appropriate project(s) `angular.json`

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

*Default background color*

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

## Switch Content
```html
<ui-switch uncheckedLabel="off">
  <img src=""/>
</ui-switch>
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
| [<img src="https://avatars3.githubusercontent.com/u/19761422?v=4" width="100px;"/><br /><sub><b>webcat_black</b></sub>](https://webcat12345.github.io/)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=webcat12345 "Code") [🎨](#design-webcat12345 "Design") [💡](#example-webcat12345 "Examples") [🤔](#ideas-webcat12345 "Ideas, Planning, & Feedback") [👀](#review-webcat12345 "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/735717?v=4" width="100px;"/><br /><sub><b>Chris McKnight</b></sub>](https://github.com/cmckni3)<br />[💬](#question-cmckni3 "Answering Questions") [💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=cmckni3 "Code") [📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=cmckni3 "Documentation") [🤔](#ideas-cmckni3 "Ideas, Planning, & Feedback") [🚇](#infra-cmckni3 "Infrastructure (Hosting, Build-Tools, etc)") [🔌](#plugin-cmckni3 "Plugin/utility libraries") [👀](#review-cmckni3 "Reviewed Pull Requests") [🔧](#tool-cmckni3 "Tools") | [<img src="https://avatars0.githubusercontent.com/u/302721?v=4" width="100px;"/><br /><sub><b>Jakub</b></sub>](https://github.com/kubiq)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=kubiq "Code") [📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=kubiq "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/915077?v=4" width="100px;"/><br /><sub><b>Serhii Kovalenko</b></sub>](https://github.com/cmajsmith)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=cmajsmith "Code") [💡](#example-cmajsmith "Examples") [📦](#platform-cmajsmith "Packaging/porting to new platform") | [<img src="https://avatars1.githubusercontent.com/u/1156100?v=4" width="100px;"/><br /><sub><b>Richard McSharry</b></sub>](https://github.com/rmcsharry)<br />[📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=rmcsharry "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/507874?v=4" width="100px;"/><br /><sub><b>bitsprint</b></sub>](https://github.com/bitsprint)<br />[🚇](#infra-bitsprint "Infrastructure (Hosting, Build-Tools, etc)") [📦](#platform-bitsprint "Packaging/porting to new platform") [🔧](#tool-bitsprint "Tools") | [<img src="https://avatars0.githubusercontent.com/u/11628507?v=4" width="100px;"/><br /><sub><b>Gianluca Paronitti</b></sub>](http://www.gamepix.com)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=gparonitti "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/5429780?v=4" width="100px;"/><br /><sub><b>Milos Bejda</b></sub>](http://mbejda.com)<br />[💻](https://github.com/webcat12345/ngx-ui-switch/commits?author=mbejda "Code") [📖](https://github.com/webcat12345/ngx-ui-switch/commits?author=mbejda "Documentation") [💡](#example-mbejda "Examples") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## FAQ

## License
MIT
