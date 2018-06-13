import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export const config: Config = {
 framework: 'jasmine',
 SELENIUM_PROMISE_MANAGER: false,
 specs: ['../test/Google.spec.js'],
 noGlobals: true,
 onPrepare: () => {
   browser.ignoreSynchronization = true;
   reporter();
 }
}
