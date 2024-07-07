import { testBase as baseTest, expectBase as baseExpect } from "../core/fixture/base-fixture";
import { LoginPage } from "../page-object/login-page";
import { HomePage } from "../page-object/home-page";
import { ProfilePage } from "../page-object/profile-page";

export const test = baseTest.extend({
    loginPage: async ({}, use) => {
        await use(new LoginPage());
    },
    homePage: async ({}, use) => {
        await use(new HomePage());
    },
    profilePage: async ({}, use) => {
        await use(new ProfilePage());
    }
});

export const expect = baseExpect