import { APIConstants } from "../../constant/api-constant";
import { APIClient } from "../api/api-client";
import { ConfigurationHelper } from "../../configurations/configuration";
import { Hooks } from "../../hooks/hooks";

export default class PhotoService {

    static async dislikePhoto(apiClient, token, photoId){
        const endpoint  =  APIConstants.DislikePhotoEndpoint.replace('{photoId}', photoId);
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        const response = await apiClient.deleteRequest(endpoint, headers);
        return response;
    }

}
