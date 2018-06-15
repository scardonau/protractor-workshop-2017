import { ElementFinder, element, by, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private get checkoutButton(): ElementFinder {
    return element(by.css('[style*="display: block;"] .button-container > a'));
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.checkoutButton), 3000);
    return this.checkoutButton.click();
  }
}
