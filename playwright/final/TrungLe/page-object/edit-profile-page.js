import { Element } from "../core/element/element"
import { BasePage } from "./base-page";
import { expect } from '../fixtures/page-fixture';

export class EditProfilePage extends BasePage{
    constructor() {
      super();
      this.userNameTextBox = new Element("id=user_username");
      this.updateBtn = new Element("input[value ='Update account']");
      this.updatedMessage = new Element("//div[normalize-space()='Account updated!']");
    }

    async editUserName(newUserName){
        await this.userNameTextBox.clearText();
        await this.userNameTextBox.fillText(newUserName);
        await this.updateBtn.scrollToView();
        await this.updateBtn.click();
    }
    
    async isUpdateMessageDisplayed(){
      await this.updatedMessage.waitForElementToBeVisible();
      const isVisible = await this.updatedMessage.isVisible();
      await expect(isVisible).toBeTruthy();
    }
}