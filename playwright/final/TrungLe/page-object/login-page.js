import { Element } from "../core/element/element"
import { BasePage } from "./base-page";
import { expect } from '../fixtures/page-fixture';

export class LoginPage extends BasePage{
  constructor() {
    super();
    this.loginButton = new Element('//button[@value="Login"]');
    this.emailTextBox = new Element('//input[@name="email"]');
    this.passwordTextBox = new Element('//input[@name="password"]');
  }

  async login(email, password) {
    await this.emailTextBox.fillText(email);
    await this.passwordTextBox.fillText(password);
    await this.loginButton.click();
  }

}

export default LoginPage
