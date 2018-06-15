import { ElementFinder, promise, element, by } from 'protractor';

export class SignInStepPage {
  private get emailForm(): ElementFinder {
    return element(by.css('#email'));
  }
  private get passwordForm(): ElementFinder {
    return element(by.css('#passwd'));
  }
  private get loginButton(): ElementFinder {
    return element(by.css('#SubmitLogin > span'));
  }

  public submitLogin(): promise.Promise<void> {
    return this.loginButton.click();
  }
  public insertEmail(email): promise.Promise<void> {
    return this.emailForm.sendKeys(email);
  }
  public insertPassword(password): promise.Promise<void> {
    return this.passwordForm.sendKeys(password);
  }
}
