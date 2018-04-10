import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
  enable = true;
  count = 0;

  constructor() {}

  ngOnInit() {}

  onSubmit() {}

  onChange() {
    this.count++;
  }
}
