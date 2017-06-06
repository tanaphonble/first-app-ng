import { StNgAppPage } from './app.po';

describe('st-ng-app App', () => {
  let page: StNgAppPage;

  beforeEach(() => {
    page = new StNgAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
