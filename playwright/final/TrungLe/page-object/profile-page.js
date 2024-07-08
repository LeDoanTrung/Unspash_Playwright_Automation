import { Element } from "../core/element/element";
import { EditProfilePage } from "./edit-profile-page";
import { expect } from '../fixtures/page-fixture';


export class ProfilePage{
    constructor() {
      this.editBtn = new Element("//a[text()='Edit profile']");     
    }

    async goToEditProfilePage(){
        await this.editBtn.click();
        return new EditProfilePage();
    }

    async isAtProfilePage(fullname){
        const fullNameLocator = `//div[text()='${fullname}']`;
        const fullNameElement = new Element(fullNameLocator);
        const isVisible = await fullNameElement.isVisible();
        await expect(isVisible).toBeTruthy();
    }
}