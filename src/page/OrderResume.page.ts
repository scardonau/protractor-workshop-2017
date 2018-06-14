import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get orderCompleteMessage(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getOrderCompleteMessage(): promise.Promise<String> {
    return this.orderCompleteMessage.getText();
  }
}
