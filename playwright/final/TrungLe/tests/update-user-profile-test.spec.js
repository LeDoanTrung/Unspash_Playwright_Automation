import { userData } from "../test-data/user-data";
import {test, expect} from '../fixtures/page-fixture';
import { DataGenerator } from "../data-provider/user-data-provider";

let newUsername;

test.beforeEach(async () => {
    //Generate random username
    newUsername = DataGenerator.generateUsername();
  });

test.afterEach(async () => {
    //Update new username to test-data
    DataGenerator.updateUsername(newUsername);
});

test('Update the username in the Profile page successfully @successfully', async({homePage, profilePage})=>{
    const loginPage =  await homePage.goToLoginPage();
    await loginPage.login(userData.email, userData.password);

    //Go to user profile page
    await homePage.goToProfilePage();
    const editProfilePage = await profilePage.goToEditProfilePage();
    
    await editProfilePage.editUserName(newUsername);
    await editProfilePage.isUpdateMessageDisplayed();
    
    await homePage.goToProfilePageViaURL(newUsername);
    await profilePage.isAtProfilePage(userData.fullname);
})

