import { ElementFinder, promise, element, by } from 'protractor';

export class BankPaymentPage {
  private get confirmOrderButton(): ElementFinder {
    return element(by.css('#cart_navigation > button > span'));
  }

  public confirmOrder(): promise.Promise<void> {
    return this.confirmOrderButton.click();
  }
}
