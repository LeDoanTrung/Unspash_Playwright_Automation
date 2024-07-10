import { request } from "@playwright/test";

export class APIClient {
    constructor(request) {
        this.request = request
    }
    // GET request
    async  getRequest(endpoint, headers = {}) {
        const response = await this.request.get(endpoint,{
            headers: headers
        });
        return response;
    }

    // POST request
    async  postRequest(endpoint, headers = {}, body = {}) {
        const response = await this.request.post(endpoint, {
            headers: headers,
            body: JSON.stringify(body)
        });
        return response;
    }

    // PUT request
    async  putRequest(endpoint, headers = {}, body = {}) {
        const response = await this.request.put(endpoint, {
            headers: headers,
            body: JSON.stringify(body)
        });
        return response;
    }

    // PATCH request
    async  patchRequest(endpoint, headers = {}, body = {}) {
        const response = await this.request.patch(endpoint, {
            headers: headers,
            body: JSON.stringify(body)
        });
        return response;
    }

    // DELETE request
    async  deleteRequest(endpoint, headers = {}) {
        const response = await this.request.delete(endpoint, {
            headers: headers
        });
        return response;
    }
}
