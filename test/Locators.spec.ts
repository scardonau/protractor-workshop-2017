import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given that we go to a practice automation form', () => {

  describe('and open the browser on the form page', () => {

    beforeAll(async () => {
      await browser.get('http://toolsqa.com/automation-practice-form/ ');
    });

    describe('when we fill the form', () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
      const expectedImageName = 'image.jpg';
      let imageName;

      beforeAll(async () => {
        await personalInformationPage.fillForm({
          firstName: 'Alejandro',
          lastName: 'Perdomo',
          sex: 'Male',
          experience: 7,
          profession: ['Automation Tester'],
          tools: ['Selenium Webdriver'],
          continent: 'South America',
          file: './resources/image.jpg',
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands']
        });
        imageName = await personalInformationPage.getImageName();
      });

      it('then the form file should uploaded', () => {
        expect(imageName).toBe(expectedImageName);
      });

      describe('when we submit the form', () => {
        let formTitle;

        beforeAll(async () => {
          await personalInformationPage.clickSubmit();
          formTitle = await personalInformationPage.getTitleText();
        });

        it('then the form must be submitted', async () => {
          expect(formTitle).toBe('Practice Automation Form');
        });
      });
    });
  });
});
