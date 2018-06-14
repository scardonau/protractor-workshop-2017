import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get cartButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public addToCart(): promise.Promise<void> {
    return this.cartButton.click();
  }
}
