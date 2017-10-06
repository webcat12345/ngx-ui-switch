# Ngx UI Switch Component

[![Greenkeeper badge](https://badges.greenkeeper.io/webcat12345/ngx-ui-switch.svg)](https://greenkeeper.io/)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ngx-discuss/Lobby)
[![Build Status](https://travis-ci.org/webcat12345/ngx-ui-switch.svg?branch=master)](https://travis-ci.org/webcat12345/ngx-ui-switch) [![npm version](https://badge.fury.io/js/ngx-ui-switch.svg)](https://badge.fury.io/js/ngx-ui-switch) [![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/ngx-ui-switch)
[![Throughput Graph](https://graphs.waffle.io/webcat12345/ngx-ui-switch/throughput.svg)](https://waffle.io/webcat12345/ngx-ui-switch/metrics)

# Description

This is a simple iOS 7 style switch component for Angular4.

Live [demo](https://webcat12345.github.io/ngx-ui-switch/demo/)

![alt](logo.png)

Inspired by [switchery](https://github.com/abpetkov/switchery) - in angular4.

# Installation

```bash
npm install ngx-ui-switch --save
```

# Usage

```javascript
import { UiSwitchModule } from 'ngx-ui-switch';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, UiSwitchModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

```html
<ui-switch></ui-switch>
```

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

> type: *event*

> default: noop

```html
<ui-switch (change)="onChange($event)"></ui-switch>
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

> type: *string*

> default: #fff


```html
<ui-switch defaultBgColor="red"></ui-switch>
```

### defaultBoColor

> type: *string*

> default: #dfdfdf


```html
<ui-switch defaultBgColor="black"></ui-switch>
```

### Development

#### Setup

```bash
yarn install
```

#### Demo

Edit files in `src/app` to add to the demo or try changes to the library.

#### Build library

*First, edit version in `package.json` and `src/lib/package.json` to publish a new version to npmjs.org*

```bash
# Build the library into dist/{es5,es2015}
yarn build
# Publish to npm
yarn run publish
```

### FAQ

# License
MIT
