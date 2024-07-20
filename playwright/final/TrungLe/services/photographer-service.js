import {APIConstants} from "../constant/api-constant";

export default class PhotographerService {

    static async getUserProfile(apiClient, token, username){

        const endpoint = APIConstants.GetPhotographerProfile.replace('{username}', username);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        const response = await apiClient.getRequest(endpoint, headers);
        return response;
    }
    
    static async getUserPortfolio(apiClient, token, username){

        const endpoint = APIConstants.GetPhotographerPortfolioLink.replace('{username}', username);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        const response = await apiClient.getRequest(endpoint, headers);
        return response;
    }

    static async getUserPhotos(apiClient, token, username){

        const endpoint = APIConstants.GetPhotographerPhotos.replace('{username}', username);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        const response = await apiClient.getRequest(endpoint, headers);
        return response;
    }

    static async getUserLikedPhotos(apiClient, token, username){

        const endpoint = APIConstants.GetPhotographerLikedPhotos.replace('{username}', username);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        const response = await apiClient.getRequest(endpoint, headers);
        return response;
    }


}
