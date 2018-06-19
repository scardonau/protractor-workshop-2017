import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Practice automation form', () => {

  describe('Open browser on page', () => {

    beforeAll(async () => {
      await browser.get('http://toolsqa.com/automation-practice-form/ ');
    });

    describe('Fill form with given parameters', () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
      let formTitle;

      beforeAll(async () => {
        await personalInformationPage.fillForm({
          firstName: 'Alejandro',
          lastName: 'Perdomo',
          sex: 'Male',
          experience: 7,
          profession: ['Automation Tester'],
          tools: ['Selenium Webdriver'],
          continent: 'South America',
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands']
        });
        await browser.sleep(10000);
        formTitle = await personalInformationPage.titleText();
      });

      it('The title of the page must match with the expected', () => {
        expect(formTitle).toBe('Practice Automation Form');
      });
    });
  });
});
