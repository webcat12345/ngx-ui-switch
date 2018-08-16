import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UiSwitchModule } from '../lib/public_api';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoCdrComponent } from './demo-cdr/demo-cdr.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GithubLinkComponent } from './github-link/github-link.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, UiSwitchModule],
      declarations: [
        AppComponent,
        DemoComponent,
        DemoCdrComponent,
        FooterComponent,
        HeaderComponent,
        GithubLinkComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
