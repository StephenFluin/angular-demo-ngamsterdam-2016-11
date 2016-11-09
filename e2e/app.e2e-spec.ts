import { MobileWebAppPage } from './app.po';

describe('mobile-web-app App', function() {
  let page: MobileWebAppPage;

  beforeEach(() => {
    page = new MobileWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
