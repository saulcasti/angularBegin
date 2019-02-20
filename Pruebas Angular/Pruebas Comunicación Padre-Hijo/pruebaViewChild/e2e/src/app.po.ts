import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  getButton(){
    return element(by.className('botonPrueba')).getText();
  }
  clickButton(){
    return element(by.className('botonPrueba')).click() as Promise<void>;
  }

  getTimes(){
    return element(by.className('times')).getText() as Promise<string>;
  }
}
