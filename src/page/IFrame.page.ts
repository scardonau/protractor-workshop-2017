import { ElementFinder, promise, element, by, browser } from 'protractor';

export class IFramePage {
  private get iFrame1(): ElementFinder {
    return element(by.id('IF1'));
  }

  private get pageTitle(): ElementFinder {
    return element(by.css('#content > h1'));
  }

  public changeIFrameHeight(newHeight): promise.Promise<void> {
    return browser
      .executeScript(`document.getElementById("IF1").setAttribute('height', ${newHeight})`);
  }

  public async getIFrameHeight(): Promise<number> {
    const height = await this.iFrame1.getAttribute('height');
    return Number(height);
  }

  public changeToIFrame1(): promise.Promise<void> {
    return browser.switchTo().frame(this.iFrame1.getWebElement());
  }

  public changeToMainpage(): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }

  public getTitleText(): promise.Promise<string> {
    return this.pageTitle.getText();
  }
}
