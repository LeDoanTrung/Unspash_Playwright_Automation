import { BrowserManagement } from "./browser-management";

export class BrowserUtils {
  static async goTo(url) {
    if (BrowserManagement.page) {
      await BrowserManagement.page.goto(url)
    } else {
      throw new Error("Page is not initialized.")
    }
  }
}
