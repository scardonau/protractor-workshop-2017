import { ElementFinder, promise, element, by } from 'protractor';

export class AddressStepPage {
  private get checkoutButton(): ElementFinder {
    return element(by.css('#center_column > form > p > button > span'));
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
