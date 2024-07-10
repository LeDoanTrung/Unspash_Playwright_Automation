import { ConfigurationHelper } from '../../configurations/configuration';
import { BrowserUtils } from '../browser/browser-utils';
import { Hooks } from '../../hooks/hooks';
import { BrowserManagement } from '../browser/browser-management';
import { DataStorage } from '../../share-data/data-storage';

const {test , expect} = require('@playwright/test');

export const testBase = test.extend({
    browserFixture: [async ({browser, context, page}, use) => {
        BrowserManagement.initializeBrowser(browser, context, page);

        await Hooks.setup();
        await BrowserUtils.goTo(ConfigurationHelper.getConfigurationByKey(Hooks.config, 'DomainURL'));
        await DataStorage.initData();
        
        await use();
        
    }, {scope: 'test', auto: true}],
})
export const expectBase = expect;