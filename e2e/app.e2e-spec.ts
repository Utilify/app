import { UtilifyAppPage } from './app.po';

describe('utilify-app App', function() {
  let page: UtilifyAppPage;

  beforeEach(() => {
    page = new UtilifyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
