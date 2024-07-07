import { ConfigurationHelper } from '../../configurations/configuration';
import { BrowserUtils } from '../browser/browser-utils';
import { Hooks } from '../../hooks/hooks';
import { BrowserManagement } from '../browser/browser-management';
const {test , expect} = require('@playwright/test');

export const testBase = test.extend({
    browserFixture: [async ({browser, context, page}, use) => {
        BrowserManagement.initializeBrowser(browser, context, page);

        await Hooks.setup();
        await BrowserUtils.goTo(ConfigurationHelper.getConfigurationByKey(Hooks.config, 'DomainURL'));

        await use();
        
    }, {scope: 'test', auto: true}],
})
export const expectBase = expect;