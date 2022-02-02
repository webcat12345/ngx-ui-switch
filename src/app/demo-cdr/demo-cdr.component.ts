import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-cdr',
  templateUrl: './demo-cdr.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCdrComponent {
  enable = true;
  manualUpdate = false;

  constructor() {}

  manualUpdateEvent(value: boolean) {
    this.manualUpdate = value;
  }
}
