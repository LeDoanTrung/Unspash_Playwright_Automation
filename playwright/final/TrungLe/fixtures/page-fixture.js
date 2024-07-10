import { testBase as baseTest, expectBase as baseExpect } from "../core/fixture/base-fixture";
import { LoginPage } from "../page-object/login-page";
import { HomePage } from "../page-object/home-page";
import { UserPortfolioPage } from "../page-object/user-portfolio-page";
import { ProfilePage } from "../page-object/profile-page";
import { EditProfilePage } from "../page-object/edit-profile-page";
import { APIClient } from "../core/api/api-client";
import { ConfigurationHelper } from "../configurations/configuration";

export const test = baseTest.extend({
    loginPage: async ({}, use) => {
        await use(new LoginPage());
    },
    homePage: async ({}, use) => {
        await use(new HomePage());
    },
    userPortfolioPage: async ({}, use) => {
        await use(new UserPortfolioPage());
    },
    profilePage: async ({}, use) => {
        await use(new ProfilePage());
    },
    editProfilePage: async ({}, use) => {
        await use(new EditProfilePage());
    },
});

export const expect = baseExpect