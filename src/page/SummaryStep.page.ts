import { ElementFinder, promise, element, by } from 'protractor';

export class SummaryStepPage {
  private get checkoutButton(): ElementFinder {
    return element(by.css('.cart_navigation span'));
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
