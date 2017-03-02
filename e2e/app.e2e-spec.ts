import { SpofyPage } from './app.po';

describe('spofy App', () => {
  let page: SpofyPage;

  beforeEach(() => {
    page = new SpofyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
