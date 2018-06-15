import { ElementFinder, promise, element, by } from 'protractor';

export class ProductDetailPage {
  private get cartButton(): ElementFinder {
    return element(by.css('#add_to_cart > button > span'));
  }

  public addToCart(): promise.Promise<void> {
    return this.cartButton.click();
  }
}
