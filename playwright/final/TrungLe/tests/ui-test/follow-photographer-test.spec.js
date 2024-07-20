import { userData } from "../../test-data/user-data";
import {test, expect} from '../../fixtures/page-fixture';

test.afterEach(async ({ userPortfolioPage }) => {
    //return the state to "unfollow" after verifying
    await userPortfolioPage.unfollowUser();
  });

test('Verify follow a photographer successfully @successfully', async({homePage})=>{
    //Login to the application
    const loginPage =  await homePage.goToLoginPage();
    await loginPage.login(userData.email, userData.password);

    //Click on the second image
    await homePage.clickOnImage(2);
    const userPortfolioPage = await homePage.goToPortfolioPage();

    //Follow the user
    await userPortfolioPage.followUser();

    //Verify the status
    await userPortfolioPage.isFollowed();
})

