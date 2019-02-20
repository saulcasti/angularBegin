import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('button text', () => {
    page.navigateTo();
    expect(page.getButtonLabel()).toEqual('Click');
  });

  it('click test',()=>{
    page.navigateTo();
    page.clickButton();
    expect(page.getMessage()).toEqual('button clicked');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
