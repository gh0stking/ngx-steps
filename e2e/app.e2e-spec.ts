import { NgxStepsPage } from './app.po';

describe('ngx-steps App', () => {
  let page: NgxStepsPage;

  beforeEach(() => {
    page = new NgxStepsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
