import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get tShirtImage(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public clickImage(): promise.Promise<void> {
    return this.tShirtImage.click();
  }
}
