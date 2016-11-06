import { AnguAppPage } from './app.po';

describe('angu-app App', function() {
  let page: AnguAppPage;

  beforeEach(() => {
    page = new AnguAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
