import { ElementFinder, promise, element, by, ElementArrayFinder } from 'protractor';

export class PersonalInformationPage {

  private get formTitle(): ElementFinder {
    return element(by.css('.wpb_content_element > div > h1'));
  }
  private get submitButton(): ElementFinder {
    return element(by.id('submit'));
  }
  private itemsByName(name: string): ElementArrayFinder {
    return element.all(by.name(name));
  }
  private filterByValue(searchedValue: string, array: ElementArrayFinder): ElementFinder {
    return array.filter((element: ElementFinder) => element
      .getAttribute('value').then(value => value === searchedValue))
      .first();
  }

  private fillFirstName(firstName: string): promise.Promise<void> {
    return this.itemsByName('firstname').first().sendKeys(firstName);
  }
  private fillLastName(lastName: string): promise.Promise<void> {
    return this.itemsByName('lastname').first().sendKeys(lastName);
  }
  private selectSex(sex: string): promise.Promise<void> {
    const sexItems = this.itemsByName('sex');
    return this.filterByValue(sex, sexItems).click();
  }
  private selectExperience(experience: string): promise.Promise<void> {
    const experienceItems = this.itemsByName('exp');
    return this.filterByValue(experience, experienceItems).click();
  }
  private selectProfessions(professions: string[]) {
    const professionItems = this.itemsByName('profession');
    professions.forEach(async (profession) => {
      await this.filterByValue(profession, professionItems).click();
    });
  }
  private selectTools(tools: string[]) {
    const toolItems = this.itemsByName('tool');
    tools.forEach(async (tool) => {
      await this.filterByValue(tool, toolItems).click();
    });
  }
  private async selectContinent(continent: string) {
    const continentsSelect = element(by.id('continents'));
    await continentsSelect.click();    
    await continentsSelect.element(by.cssContainingText('option', continent)).click();

  }
  private clickCommands(commands): promise.Promise<void> {
    const commandsSelect = element(by.id('selenium_commands'));
    return commands.forEach(async (element) => {
      await commandsSelect.element(by.cssContainingText('option', element)).click();
    });
  }
  private submitForm(): promise.Promise<void> {
    return this.submitButton.click();
  }

  public async fillForm(parameters) {
    await this.fillFirstName(parameters.firstName);
    await this.fillLastName(parameters.lastName);
    await this.selectSex(parameters.sex);
    await this.selectExperience(parameters.experience.toString());
    await this.selectProfessions(parameters.profession);
    await this.selectTools(parameters.tools);
    await this.selectContinent(parameters.continent);
    await this.clickCommands(parameters.commands);
    await this.submitForm();
  }
  public titleText(): promise.Promise<String> {
    return this.formTitle.getText();
  }
}
