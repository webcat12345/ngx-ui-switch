import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import json from '../lib/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private t: Title) {
    const title = [this.t.getTitle()];
    if (json) {
      title.push(`${json.version} Demo`);
    }
    t.setTitle(title.join(' '));
  }
}
