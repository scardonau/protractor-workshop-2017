import { browser } from 'protractor';
import { IFramePage, PersonalInformationPage } from '../src/page';

describe('Given that we visit a page with an Iframe', () => {
  const iframePageUrl = 'http://toolsqa.com/iframe-practice-page/';
  const iFramePage : IFramePage = new IFramePage();

  beforeAll(async () => {
    await browser.get(iframePageUrl);
  });

  describe('when we try to modify the Iframe 1 height', () => {
    let newHeight;
    const expectedHeight = 850;

    beforeAll(async () => {
      await iFramePage.changeIFrameHeight(expectedHeight);
      newHeight = await iFramePage.getIFrameHeight();
    });

    it(`then the new Iframe height should be ${expectedHeight}`, () => {
      expect(newHeight).toBe(expectedHeight);
    });

    describe('when get the page title', () => {
      let pageTitle;
      const expectedPageTitle = 'Sample Iframe page';

      beforeAll(async () => {
        pageTitle = await iFramePage.getTitleText();
      });

      it(`then it should be '${expectedPageTitle}'`, () => {
        expect(pageTitle).toBe(expectedPageTitle);
      });

      describe('when we get into the IFrame 1', () => {
        let iFrame1Title;
        const expectedIFrame1Title = 'Practice Automation Form';
        const personalInformationPage : PersonalInformationPage = new PersonalInformationPage();

        beforeAll(async () => {
          await iFramePage.changeToIFrame1();
          iFrame1Title = await personalInformationPage.getTitleText();
        });

        it(`then the title should be '${expectedIFrame1Title}'`, () => {
          expect(iFrame1Title).toBe(expectedIFrame1Title);
        });

        describe('when we go back to the main page', () => {

          beforeAll(async () => {
            await iFramePage.changeToMainpage();
            pageTitle = await iFramePage.getTitleText();
          });

          it(`then the title should be ${expectedPageTitle}`, () => {
            expect(pageTitle).toBe(expectedPageTitle);
          });
        });
      });
    });
  });
});
