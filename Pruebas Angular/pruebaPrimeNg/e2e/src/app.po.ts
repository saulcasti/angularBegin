import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getButtonLabel() {
    return element(by.className('click')).getText() as Promise<string>;
  }

  clickButton(){
    element(by.className('click')).click() as Promise<void>;
  }

  getMessage(){
    return element(by.className('messageText')).getText() as Promise<string>;
  }
}
