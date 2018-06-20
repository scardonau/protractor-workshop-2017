import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/**/IFrame.spec.js'],
  noGlobals: true,
  getPageTimeout: 30000,
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars=true --window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  }
};
