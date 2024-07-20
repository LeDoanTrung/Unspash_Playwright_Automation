import {test, expect} from '../../fixtures/page-fixture';
import { userData } from "../../test-data/user-data";
import PhotographerService from '../../services/photographer-service';
import { photographer } from '../../test-data/photographer-data';
import { APIClient } from '../../core/api/api-client';
import { RestExtension } from '../../core/extension/rest-extension';
const userProfileSchema = require('../../resource/schema/photographer-schema.json')
const likedPhotosSchema = require('../../resource/schema/liked-photos-schema.json');
const listPhotosSchema = require('../../resource/schema/list-photos-schema.json');

test('Verify get user portfolio request', async({request}) => {
    const apiClient = new APIClient(request);
    const response = await PhotographerService.getUserProfile(apiClient, userData.token, photographer.username);
     // Verify status code
    expect(response.status()).toBe(200);

     // Verify response schema
    const responseBody = await response.json();
    const isValid = await RestExtension.validateSchema(userProfileSchema, responseBody);
    expect(isValid).toBe(true);

    // Verify that the username in the response matches the username passed in
    expect(responseBody.username).toBe(photographer.username);
});

test('Verify get user portfolio link request', async({request}) => {
    const apiClient = new APIClient(request);
    const response = await PhotographerService.getUserPortfolio(apiClient, userData.token, photographer.username);
     // Verify status code
    expect(response.status()).toBe(200);
});

test('Verify get user list photos request', async({request}) => {
    const apiClient = new APIClient(request);
    const response = await PhotographerService.getUserPhotos(apiClient, userData.token, photographer.username);
     // Verify status code
    expect(response.status()).toBe(200);

     // Verify response schema
    const responseBody = await response.json();
    const isValid = await RestExtension.validateSchema(listPhotosSchema, responseBody);
    expect(isValid).toBe(true);

});

test('Verify get user liked photos request', async({request}) => {
    const apiClient = new APIClient(request);
    const response = await PhotographerService.getUserLikedPhotos(apiClient, userData.token, photographer.username);
     // Verify status code
    expect(response.status()).toBe(200);

     // Verify response schema
    const responseBody = await response.json();
    const isValid = await RestExtension.validateSchema(likedPhotosSchema, responseBody);
    expect(isValid).toBe(true);

});
