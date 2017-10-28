import { Component, Input, Output, EventEmitter, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const UI_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: forwardRef(() => UiSwitchComponent),
  multi: true
};

@Component({
  selector: 'ui-switch',
  template: `
    <span class="ui-switch"
    [class.checked]="checked"
    [class.disabled]="disabled"
    [class.large]="size === 'large'"
    [class.medium]="size === 'medium'"
    [class.small]="size === 'small'"
    >
    <small></small>
    </span>
  `,
  providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
})
export class UiSwitchComponent implements ControlValueAccessor {

  private _checked: boolean;
  private _disabled: boolean;
  private _reverse: boolean;

  @Input() size = 'medium';
  @Output() change = new EventEmitter<boolean>();
  @Input() switchOffColor = '';
  @Input() switchColor = '#fff';

  @Input() set checked(v: boolean) {
    this._checked = v !== false;
  }

  get checked() {
    return this._checked;
  }

  @Input() set disabled(v: boolean) {
    this._disabled = v !== false;
  }

  get disabled() {
    return this._disabled;
  }

  @Input() set reverse(v: boolean) {
    this._reverse = v !== false;
  }

  get reverse() {
    return this._reverse;
  }

  constructor() { }

  getColor(flag = '') {
    if (flag === 'switchColor') {
      if (this.reverse) {
        return !this.checked ? this.switchColor : this.switchOffColor;
      }
      return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
    }
  }

  @HostListener('click')
  onToggle() {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.change.emit(this.checked);
    this.onChangeCallback(this.checked);
    this.onTouchedCallback(this.checked);
  }

  writeValue(obj: any): void {
    if (obj !== this.checked) {
      this.checked = !!obj;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private onTouchedCallback = (v: any) => { };
  private onChangeCallback = (v: any) => { };
}
