import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get termsChechbox(): ElementFinder {
    return $('#cgv');
  }
  private get checkoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  public agreeTermsAndConditions(): promise.Promise<void> {
    return this.termsChechbox.click();
  }
  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
