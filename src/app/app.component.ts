import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import json from '../lib/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        width: 80%;
        display: block;
        margin: 0 auto;
        height: 600px;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  constructor(private t: Title) {
    const title = [t.getTitle()];
    if (json) {
      title.push(`${json.version} Demo`);
    }
    t.setTitle(title.join(' '));
  }

  ngOnInit() {}
}
