import { TestAppPage } from './app.po';

describe('test-app App', function() {
  let page: TestAppPage;

  beforeEach(() => {
    page = new TestAppPage();
  });

  it('should display message saying Test APP', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Test APP');
  });

  it('should display message saying Test APP', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Test APP');
  });
});
