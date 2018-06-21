import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given that we visit a page with an Iframe', () => {
  const iframePageUrl = 'http://toolsqa.com/iframe-practice-page/';
  const iFramePage : IFramePage = new IFramePage();

  beforeAll(async () => {
    await browser.get(iframePageUrl);
  });

  describe('when we try to modify the Iframe 1 height', () => {
    let newHeight;
    const expectedHeight = 150;

    beforeAll(async () => {
      await iFramePage.changeIFrameHeight(expectedHeight);
      newHeight = await iFramePage.getIFrameHeight();
    });

    it(`then the new Iframe height should be ${expectedHeight}`, () => {
      expect(newHeight).toBe(expectedHeight);
    });
  });
});
