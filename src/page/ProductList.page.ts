import { ElementFinder, promise, element, by } from 'protractor';

export class ProductListPage {
  private get tShirtImage(): ElementFinder {
    return element(by
      .css('a.product_img_link > img')
    );
  }

  public clickImage(): promise.Promise<void> {
    return this.tShirtImage.click();
  }
}
