import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UiSwitchComponent } from './ui-switch.component';
import { UI_SWITCH_OPTIONS } from './ui-switch.token';
import { UiSwitchModuleConfig } from './ui-switch.config';

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
export class UiSwitchModule {
  static forRoot(config: UiSwitchModuleConfig | null | undefined): ModuleWithProviders {
    return {
      ngModule: UiSwitchModule,
      providers: [
        {provide: UI_SWITCH_OPTIONS, useValue: config || {}}
      ]
    };
  }
}
