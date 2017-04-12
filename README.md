# Description

This is a simple iOS 7 style switch component for Angular2.

![alt](logo.png)

Inspired by [switchery](https://github.com/abpetkov/switchery) - in angular2.

# Installation

```bash
npm install angular2-ui-switch --save
```

# Usage

```javascript
import { UiSwitchModule } from 'angular2-ui-switch'
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

# License
MIT
