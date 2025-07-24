import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  // two-way binding
  enable = true;

  // Event-based
  count = 0;
  change = false;
  valueChange = false;

  // Template driven form
  submitted = false;
  enableFeature = false;
  submittedValue = null;

  changeEvent: MouseEvent;

  isLoading = false;
  beforeChangeValue = false;
  fakeAsync: Observable<boolean> = new Observable(observer => {
    this.isLoading = true;
    const timeout = setTimeout(() => {
      this.isLoading = false;
      observer.next(true);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  @ViewChild('demoForm') demoForm: NgForm;

  constructor() {}

  // Template driven form
  onSubmit(event: any) {
    console.log(event, event.toString(), JSON.stringify(event));
    this.submitted = true;
    this.submittedValue = this.demoForm.value;
  }

  // Event-based
  onChange(value: boolean) {
    this.count++;
    this.change = value;
  }

  onChangeEvent(event: MouseEvent) {
    console.log(event, event.toString(), JSON.stringify(event));
    this.changeEvent = event;
  }

  onValueChange(value: boolean) {
    this.valueChange = value;
  }
}
