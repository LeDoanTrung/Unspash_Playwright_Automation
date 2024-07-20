import {test, expect} from '../../fixtures/page-fixture';
import { userData } from "../../test-data/user-data";
import PhotoService from "../../services/photo-service";
import UserService from '../../services/user-service';
import { DataStorage } from '../../share-data/data-storage';
import { APIClient } from '../../core/api/api-client';

test('Verify like 03 random photos successfully @successfully', async({homePage, profilePage})=>{

    const loginPage = await homePage.goToLoginPage();
    await loginPage.login(userData.email, userData.password);

    //Like 03 random photos
    await homePage.waitForLoading(); // Wait for loading
    await homePage.likeRandomPhotos(3);
    await homePage.goToProfilePageViaURL(userData.username);
    await profilePage.goToLikesTab();

    //Verify the 03 photos
    await profilePage.verifyNumberOfLikes(3);
    await profilePage.verifyTheLikedPhotos();
});

test.afterEach(async ({request}) => {
    //Clean the data storage
    DataStorage.clearData();

    //Get list of liked photos
    const apiClient = new APIClient(request);
    const listResponse = await UserService.getListOfLikedPhotos(apiClient, userData.token, userData.username);
    const listResponseBody = await listResponse.json();
    
    //Dislike all photos in the list
    const dislikePromises = listResponseBody.map(photo => {
        return PhotoService.dislikePhoto(apiClient, userData.token, photo.id)
            .then(response => {
                expect(response.ok).toBeTruthy(); // Assert that the dislike operation was successful
            });
    });

    // Wait for all dislike operations to complete
    await Promise.all(dislikePromises);
});