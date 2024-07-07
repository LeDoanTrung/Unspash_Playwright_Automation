import { BrowserManagement } from "../browser/browser-management";

export class Element{
    constructor(locator){
        this.locator = locator;
    }

    async click(){
        await BrowserManagement.page.locator(this.locator).click();
    }

    async enter(text){
        await BrowserManagement.page.locator(this.locator).type(text);
    }

    async waitForElement(options){
        await BrowserManagement.page.locator(this.locator).waitFor(options);
    }

    async waitForElementToBeVisible(){
        await this.waitForElement({state: 'visible', timeout: 5000});
    }

    async waitForElementToBeHidden(){
        await this.waitForElement({state: 'hidden', timeout: 5000});
    }

    async fillText(text){
        await BrowserManagement.page.locator(this.locator).fill(text);
    }

    async hover(){
        await BrowserManagement.page.locator(this.locator).hover();
    }

    async clearText() {
        await BrowserManagement.page.locator(this.locator).clear();
    }

    async getText() {
        return await BrowserManagement.page.locator(this.locator).textContent();
    }

    async isVisible() {
        return await BrowserManagement.page.locator(this.locator).isVisible();
    }

    async hover() {
        await BrowserManagement.page.locator(this.locator).hover();
    }

    async scrollToView(){
        await BrowserManagement.page.locator(this.locator).scrollIntoViewIfNeeded();
    }
}

module.exports = { Element };