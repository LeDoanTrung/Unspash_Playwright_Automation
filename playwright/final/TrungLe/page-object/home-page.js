import { BasePage } from "./base-page"
import { Element } from "../core/element/element"
import { LoginPage } from "../page-object/login-page";
import { UserPortfolioPage } from "./user-portfolio-page";
import { ProfilePage } from "./profile-page";
import { BrowserUtils } from "../core/browser/browser-utils";

const imageLocator = (col, row) => `div[data-test="masonry-grid-count-three"] > div:nth-child(${col}) > figure:nth-child(${row})`;

export class HomePage extends BasePage {
  constructor() {
    super();
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

    return imageLocator(col, row);
  }

  async clickOnImage(value){
    const locator = await this.getLocatorOfSelectedImage(value);
    const selectedImage = await new Element(locator);
    await selectedImage.scrollToView();
    await selectedImage.click();
  }

  async goToPortfolioPage(){
    await this.avatarIcon.hover();
    await this.viewProfileBtn.click();
    return new UserPortfolioPage();
  }

}
