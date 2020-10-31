import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubLinkComponent } from './github-link.component';

describe('GithubLinkComponent', () => {
  let component: GithubLinkComponent;
  let fixture: ComponentFixture<GithubLinkComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GithubLinkComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
