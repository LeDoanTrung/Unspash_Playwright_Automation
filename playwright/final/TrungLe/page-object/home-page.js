import { BasePage } from "./base-page"
import { Element } from "../core/element/element"
import { LoginPage } from "../page-object/login-page";
import { UserPortfolioPage } from "./user-portfolio-page";
import { DataGenerator } from "../data-provider/data-provider";
import { DataStorage } from "../share-data/data-storage";

export class HomePage extends BasePage {
  constructor() {
    super();
    this.imageLocator = (col, row) => `div[data-test="masonry-grid-count-three"] > div:nth-child(${col}) > figure:nth-child(${row})`;
    this.likeIcon = new Element("//header//button[@title='Like this image']");
    this.profileIcon = new Element("//header//img[contains(@alt,'Go to')]");
    this.closeBtn = new Element("//div[@aria-label='Modal']/div/button");
    this.imageModal = new Element("//button[@title='Zoom in on this image']/descendant::img[@alt]");
  }

  async goToLoginPage(){
    await this.loginBtn.click();
    return new LoginPage()
  }

  //get the locator of the image
  async getLocatorOfSelectedImage(value) {
    const columns = 3; 
    const row = Math.floor((value - 1) / columns) + 1;  
    const col = (value - 1) % columns + 1;  

    return this.imageLocator(col, row);
  }

  async clickOnImage(value){
    const locator = await this.getLocatorOfSelectedImage(value);
    const selectedImage = await new Element(locator);
    await selectedImage.scrollToView();
    await selectedImage.click();
  }

  async goToPortfolioPage(){
    await this.profileIcon.hover();
    await this.viewProfileBtn.click();
    return new UserPortfolioPage();
  }

  async likeRandomPhotos(number){
    for (let i = 0; i < number; i++) {
      
      await this.clickOnImage(DataGenerator.generateRandomNumber());
      await this.likeIcon.click();

      //Store to verify
      const attributeValue = await this.imageModal.getAttribute('alt');
      DataStorage.setData(attributeValue);

      await this.closeBtn.click();
    }
  }
}
