import { ElementFinder, promise, element, by } from 'protractor';

export class MenuContentPage {
  private get tShirtMenu(): ElementFinder {
    return element(by.css('#block_top_menu > ul > li:nth-child(1) > a'));
  }

  public goToTShirtMenu(): promise.Promise<void> {
    return this.tShirtMenu.click();
  }
}
