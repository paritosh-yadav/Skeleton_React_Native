/**
 * @flow
 */
import axios from "axios";

const initiateAPICall = (endpoint: string, method: string, params: Object | null, payload: Object | null) => {
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

export default {
    initiateAPICall
};
