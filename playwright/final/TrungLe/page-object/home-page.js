import { BasePage } from "./base-page"
import { Element } from "../core/element/element"
import { LoginPage } from "../page-object/login-page";
import { ProfilePage } from "./profile-page";

const imageLocator = (col, row) => `div[data-test="masonry-grid-count-three"] > div:nth-child(${col}) > figure:nth-child(${row})`;

export class HomePage extends BasePage {
  constructor() {
    super();
    this.loginBtn = new Element("//a[text()='Explore']/ancestor::ul/following-sibling::div/a[text()='Log in']");
    this.viewProfileBtn = new Element("//a[text()='View profile']");
    this.avatarIcon = new Element("div[data-test='photos-route'] header img");
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

  async goToProfilePage(){
    await this.avatarIcon.hover();
    await this.viewProfileBtn.click();
    return new ProfilePage();
  }

}

export default HomePage;