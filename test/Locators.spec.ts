import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service';

describe('Given that we go to a practice automation form', () => {

  describe('and open the browser on the form page', () => {

    beforeAll(async () => {
      await browser.get('http://toolsqa.com/automation-practice-form/ ');
    });

    describe('when we fill the form', () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
      const downloadService: DownloadService = new DownloadService();
      const expectedUploadedImageName = 'image.jpg';
      const downloadedFileName = 'test-file.xml';
      let uploadedImageName;
      let downloadedFile;

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
          downloadFile: downloadedFileName,
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands']
        });
        uploadedImageName = await personalInformationPage.getImageName();
        downloadedFile = await downloadService.readFileFromTemp(downloadedFileName);
      });

      it('then the form file should uploaded', () => {
        expect(uploadedImageName).toBe(expectedUploadedImageName);
      });

      it('and the page file should be downloaded', () => {
        expect(downloadedFile.byteLength).toBeGreaterThan(5000);
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
