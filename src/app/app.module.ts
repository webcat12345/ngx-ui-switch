import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UiSwitchModule } from '../lib/public_api';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoCdrComponent } from './demo-cdr/demo-cdr.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GithubLinkComponent } from './github-link/github-link.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoCdrComponent,
    FooterComponent,
    HeaderComponent,
    GithubLinkComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, UiSwitchModule],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
