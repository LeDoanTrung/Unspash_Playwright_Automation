import { Element } from "../core/element/element";
import { BrowserUtils } from "../core/browser/browser-utils";
import { BrowserManagement } from "../core/browser/browser-management";
import { Hooks } from "../hooks/hooks";
import { ConfigurationHelper } from "../configurations/configuration";

export class BasePage{
    constructor() {
        this.loginBtn = new Element("//a[text()='Explore']/ancestor::ul/following-sibling::div/a[text()='Log in']");
        this.viewProfileBtn = new Element("//a[text()='View profile']");
        this.avatarIcon = new Element("//button[@title='Your personal menu button']");
      }

    async waitForNavigation() {
        await BrowserManagement.page.waitForNavigation();
    }
    
    async goToProfilePage(){
        await this.avatarIcon.click();
        await this.viewProfileBtn.click();
    }
    
    async goToProfilePageViaURL(username){
        const domainURL = ConfigurationHelper.getConfigurationByKey(Hooks.config, 'DomainURL');
        const url = `${domainURL}/@${username}`;
        await BrowserUtils.goTo(url);  
    }
}