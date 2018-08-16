import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
  enable = true;
  count = 0;
  change = false;
  valueChange = false;
  changeEvent: MouseEvent;

  constructor() {}

  ngOnInit() {}

  onSubmit() {}

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
