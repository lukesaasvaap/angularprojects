import { Angular2TemplatingPage } from './app.po';

describe('angular2-templating App', function() {
  let page: Angular2TemplatingPage;

  beforeEach(() => {
    page = new Angular2TemplatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
