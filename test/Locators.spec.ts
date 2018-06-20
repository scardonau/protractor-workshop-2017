import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Practice automation form', () => {

  describe('When we open the browser on the form page', () => {

    beforeAll(async () => {
      await browser.get('http://toolsqa.com/automation-practice-form/ ');
    });

    describe('And fill form with given parameters', () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
      let formTitle;

      beforeAll(async () => {
        await personalInformationPage.submit({
          firstName: 'Alejandro',
          lastName: 'Perdomo',
          sex: 'Male',
          experience: 7,
          profession: ['Automation Tester'],
          tools: ['Selenium Webdriver'],
          continent: 'South America',
          file: '../../resources/image.jpg',
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands']
        });
      });

      describe('If we submit the form', () => {
        beforeAll(async () => {
          formTitle = await personalInformationPage.getTitleText();
        });

        it('Then the title of the page must match with the expected', async () => {
          expect(formTitle).toBe('Practice Automation Form');
        });
      });
    });
  });
});
