import { Element } from "../core/element/element"
import { BasePage } from "./base-page";
import { expect } from '../fixtures/page-fixture';

export class UserPortfolioPage extends BasePage{
    constructor() {
      super();
      this.moreActionBtn = new Element("//button[@title='More Actions']");
      this.followBtn = new Element("//button[@role='menuitem']/..");
    }

    async followUser (){
        await this.moreActionBtn.scrollToView()
        await this.moreActionBtn.click();
        await this.followBtn.waitForElementToBeVisible();
        await this.followBtn.click();
    }

    async isFollowed(){
        await this.followBtn.waitForElementToBeVisible();
        const buttonText = await this.followBtn.getText();
        await expect(buttonText.startsWith("Unfollow")).toBeTruthy();
    }

    async unfollowUser(){
        await this.isFollowed();
        await this.followBtn.waitForElementToBeVisible();
        await this.followBtn.click();       
    }
}