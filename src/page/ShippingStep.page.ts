import { ElementFinder, promise, element, by } from 'protractor';

export class ShippingStepPage {
  private get termsChechbox(): ElementFinder {
    return element(by.id('cgv'));
  }
  private get checkoutButton(): ElementFinder {
    return element(by.css('#form > p > button > span'));
  }

  public agreeTermsAndConditions(): promise.Promise<void> {
    return this.termsChechbox.click();
  }
  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
