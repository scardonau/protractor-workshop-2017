import { browser, ElementFinder, promise, element, by } from 'protractor';
import { resolve } from 'path';
import { existsSync } from 'fs';
import * as remote from 'selenium-webdriver/remote';

export class PersonalInformationPage {

  private get formTitle(): ElementFinder {
    return element(by.css('.wpb_content_element > div > h1'));
  }

  private get submitButton(): ElementFinder {
    return element(by.id('submit'));
  }

  private get firstNameField(): ElementFinder {
    return element(by.name('firstname'));
  }

  private get lastNameField(): ElementFinder {
    return element(by.name('lastname'));
  }

  private sexRadioButton(sex: string): ElementFinder {
    return element(by.css(`input[value="${sex}"`));
  }

  private experienceRadioButton(experience: number): ElementFinder {
    return element(by.id(`exp-${experience - 1}`));
  }

  private professionCheckbox(profession: string): ElementFinder {
    return element(by.css(`[value="${profession}"]`));
  }

  private toolRadioButton(tool: string): ElementFinder {
    return element(by.css(`input[value="${tool}"]`));
  }

  private get continentsDropdown(): ElementFinder {
    return element(by.id('continents'));
  }

  private get uploadFileField(): ElementFinder {
    return element(by.id('photo'));
  }

  private continentOption(continentName: string): ElementFinder {
    return element(by.cssContainingText('option', continentName));
  }

  private commandOption(commandName: string): ElementFinder {
    return element(by.cssContainingText('option', commandName));
  }

  private async selectProfessions(professions: string[]): Promise<void> {
    for (const profession of professions) {
      await this.professionCheckbox(profession).click();
    }
  }

  private async selectTools(tools: string[]): Promise<void> {
    for (const tool of tools) {
      await this.toolRadioButton(tool).click;
    }
  }

  private async selectCommands(commands): Promise<void> {
    for (const command of commands) {
      await this.commandOption(command).click;
    }
  }

  private submitForm(): promise.Promise<void> {
    return this.submitButton.click();
  }

  private async selectContinent(continent: string): Promise<void> {
    await this.continentsDropdown.click();
    await this.continentOption(continent).click();
  }


  private async uploadFile(filePath: string): Promise<void> {
    const fullPath = resolve(process.cwd(), filePath);

    if (existsSync(fullPath)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.uploadFileField.sendKeys(fullPath);
      await browser.setFileDetector(undefined);
    }
  }

  public async fillForm(formData) {
    await this.firstNameField.sendKeys(formData.firstName);
    await this.lastNameField.sendKeys(formData.lastName);
    await this.sexRadioButton(formData.sex).click();
    await this.experienceRadioButton(formData.experience).click();
    await this.selectProfessions(formData.profession);
    await this.uploadFile(formData.file);
    await this.selectTools(formData.tools);
    await this.selectContinent(formData.continent);
    await this.selectCommands(formData.commands);
  }

  public async submit(formData) {
    await this.fillForm(formData);
    return this.submitForm();
  }

  public getTitleText(): promise.Promise<String> {
    return this.formTitle.getText();
  }
}
