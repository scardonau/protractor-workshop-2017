import { ElementFinder, promise, element, by } from 'protractor';

export class OrderResumePage {
  private get orderCompleteMessage(): ElementFinder {
    return element(by.css('#center_column > div > p > strong'));
  }

  public getOrderCompleteMessage(): promise.Promise<String> {
    return this.orderCompleteMessage.getText();
  }
}
