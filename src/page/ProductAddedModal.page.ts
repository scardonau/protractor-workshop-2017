import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
  private get checkoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
