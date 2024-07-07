import { Element } from "../core/element/element";
import { BrowserUtils } from "../core/browser/browser-utils";
import { BrowserManagement } from "../core/browser/browser-management";

export class BasePage{

    async waitForNavigation() {
        await BrowserManagement.page.waitForNavigation();
    }
    
}