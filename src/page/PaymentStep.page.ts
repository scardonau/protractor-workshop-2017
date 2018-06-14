import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get payByWireOption(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public payByWire(): promise.Promise<void> {
    return this.payByWireOption.click();
  }
}
