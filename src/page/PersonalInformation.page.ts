import { ElementFinder, promise, element, by, ElementArrayFinder } from 'protractor';

export class PersonalInformationPage {

  private get formTitle(): ElementFinder {
    return element(by.css('.wpb_content_element > div > h1'));
  }

  private itemsByName(name: string): ElementArrayFinder {
    return element.all(by.name(name));
  }
  private filterByValue(searchedValue: string, array: ElementArrayFinder): ElementFinder {
    return array.filter((element : ElementFinder) => element
    .getAttribute('value').then(value => value === searchedValue))
    .first();
  }

  private fillFirstName(firstName: string): promise.Promise<void> {
    return this.itemsByName('firstname').first().sendKeys(firstName)
  }
  private fillLastName(lastName: string): promise.Promise<void> {
    return this.itemsByName('lastname').first().sendKeys(lastName)
  }
  private selectSex(sex: string): promise.Promise<void> {
    const sexItems = this.itemsByName('sex');
    return this.filterByValue(sex, sexItems).click();
  }

  // here we go

  public fillForm(parameters) {
    this.fillFirstName(parameters.firstName);
    this.fillLastName(parameters.lastName);
    this.selectSex(parameters.sex)
  }
  public titleText(): promise.Promise<String> {
    return this.formTitle.getText();
  }
}