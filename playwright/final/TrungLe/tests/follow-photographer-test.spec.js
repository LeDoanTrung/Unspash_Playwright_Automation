import { HomePage } from "../page-object/home-page";
import { BasePage } from "../page-object/base-page";
import { userData } from "../test-data/user-data";
import {test, expect} from '../fixtures/page-fixture';

test('Verify follow a photographer successfully @successfully', async({homePage})=>{
    const loginPage =  await homePage.goToLoginPage();
    await loginPage.login(userData.email, userData.password);

    //Click on the second image
    await homePage.clickOnImage(2);
    const profilePage = await homePage.goToProfilePage();
    await profilePage.followUser();
    await profilePage.isFollowed();
})

