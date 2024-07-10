import { Element } from "../core/element/element";
import { EditProfilePage } from "./edit-profile-page";
import { expect } from '../fixtures/page-fixture';
import { DataStorage } from "../share-data/data-storage";

export class ProfilePage{
    constructor() {
      this.editBtn = new Element("//a[text()='Edit profile']");     
      this.likesTab = new Element("//a[text()='Likes']");
      this.imageModal = new Element("//button[@title='Zoom in on this image']/descendant::img[@alt]");
      this.numberOfLikesLocator = "//a[text()='Likes']//span[text()='{number}']";
      this.likedImagesLocator = "figure a[itemprop='contentUrl']";
      this.closeBtn = new Element("//div[@aria-label='Modal']/div/button");
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

    async goToLikesTab(){
       await this.likesTab.click();
    }

    async verifyNumberOfLikes(number){
        const numberOfLikes = new Element(this.numberOfLikesLocator.replace('{number}', number));
        const isVisible = await numberOfLikes.isVisible();
        await expect(isVisible).toBeTruthy();
    }

    async verifyTheLikedPhotos(){
        const images = await Element.findElements(this.likedImagesLocator);
        for (const image of images) {
            await image.click(); 
            const attributeValue = await this.imageModal.getAttribute('alt');
            
            //Verify image that matches the liked
            expect(attributeValue).toEqual(DataStorage.getData());
            await this.closeBtn.click();
        }
    }
}