import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get emailForm(): ElementFinder {
    return $('#email');
  }
  private get passwordForm(): ElementFinder {
    return $('#passwd');
  }
  private get loginButton(): ElementFinder {
    return $('#SubmitLogin > span');
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
