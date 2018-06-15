import { ElementFinder, promise, element, by } from 'protractor';

export class ProductAddedModalPage {
  private get checkoutButton(): ElementFinder {
    return element(by.css('[style*="display: block;"] .button-container > a'));
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
