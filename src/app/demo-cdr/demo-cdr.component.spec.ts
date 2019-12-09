import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoCdrComponent } from './demo-cdr.component';
import { UiSwitchModule } from '../../lib/ui-switch/ui-switch.module';

describe('DemoCdrComponent', () => {
  let component: DemoCdrComponent;
  let fixture: ComponentFixture<DemoCdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoCdrComponent],
      imports: [FormsModule, ReactiveFormsModule, UiSwitchModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
