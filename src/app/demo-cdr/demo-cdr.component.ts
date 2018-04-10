import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-cdr',
  templateUrl: './demo-cdr.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCdrComponent implements OnInit {
  enable = true;
  manualUpdate = false;

  constructor() {}

  ngOnInit() {}

  manualUpdateEvent(value: boolean) {
    this.manualUpdate = value;
  }
}
