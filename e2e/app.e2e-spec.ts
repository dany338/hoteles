import { HotelesPage } from './app.po';

describe('hoteles App', () => {
  let page: HotelesPage;

  beforeEach(() => {
    page = new HotelesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
