import { APIConstants } from "../constant/api-constant";

export default class UserService {

    static async getListOfLikedPhotos(apiClient, token, username){
        const endpoint  =  APIConstants.GetListOfLikedPhotosEndpoint.replace('{username}', username);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        const response = await apiClient.getRequest(endpoint, headers);
        return response;
    }
}
