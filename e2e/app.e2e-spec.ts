import { UISwitchPage } from './app.po';

describe('ngx-ui-switch App', () => {
  let page: UISwitchPage;

  beforeEach(() => {
    page = new UISwitchPage();
  });

  it('should display navbar title', () => {
    page.navigateTo();
    expect(page.getNavbarText()).toEqual('ngx ui switch');
  });
});
