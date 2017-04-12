import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UiSwitchModule } from '../../src'
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, UiSwitchModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}