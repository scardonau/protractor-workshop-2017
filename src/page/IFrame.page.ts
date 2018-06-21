import { ElementFinder, promise, element, by, browser } from 'protractor';

export class IFramePage {
  private get iFrame1(): ElementFinder {
    return element(by.id('IF1'));
  }

  public changeIFrameHeight(newHeight): promise.Promise<void> {
    return browser
      .executeScript(`document.getElementById("IF1").setAttribute('height', ${newHeight})`);
  }
  public async getIFrameHeight(): Promise<number> {
    const height = await this.iFrame1.getAttribute('height');
    return Number(height);
  }
}
