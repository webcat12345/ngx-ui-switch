import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UiSwitchComponent } from './ui-switch.component';

@NgModule({
  declarations: [
    UiSwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,

    UiSwitchComponent
  ]
})
export class UiSwitchModule { }
