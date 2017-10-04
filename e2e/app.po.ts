import { browser, element, by } from 'protractor';

export class UISwitchPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarText() {
    return element(by.css('.navbar-brand')).getText();
  }
}
