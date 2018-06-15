import { ElementFinder, promise, element, by } from 'protractor';

export class PaymentStepPage {
  private get payByWireOption(): ElementFinder {
    return element(by.css('#HOOK_PAYMENT > div:nth-child(1) > div > p > a'));
  }

  public payByWire(): promise.Promise<void> {
    return this.payByWireOption.click();
  }
}
