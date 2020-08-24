// @flow
// Common method for initiating API calls
import axios from "axios";

export const initiateAPICall = (endpoint: string, method: string, params: Object | null, payload: Object | null) => {
    return axios({
        method: method,
        url: endpoint,
        data: payload,
        headers: {
            // extra headers
        },
        params
    });
};
