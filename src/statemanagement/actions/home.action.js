/**
 * @flow
 */
import {
    CHANGE_COUNTER,
    GET_BREWERIES_FAILED,
    GET_BREWERIES_SUCCEED,
    GET_BREWERIES_INITIATED,
} from "../constants/home.constants";
import api from "../../../api";

type ChangeCounterAction = { type: CHANGE_COUNTER };
export const changeCounter = (): ChangeCounterAction => ({
    type: CHANGE_COUNTER,
});


type GetBreweriesInitiatedAction = { type: GET_BREWERIES_INITIATED };
const initiateBreweriesFetching = (): GetBreweriesInitiatedAction => ({ //When action initiated
    type: GET_BREWERIES_INITIATED,
});

type GetBreweriesSuccessAction = { type: GET_BREWERIES_SUCCEED, payload: Object };
const breweriesFetchingSucceed = (data: Object): GetBreweriesSuccessAction => ({ //When action succeed
    type: GET_BREWERIES_SUCCEED,
    payload: {
        data,
    }
});

type GetBreweriesFailedAction = { type: GET_BREWERIES_FAILED, payload: Object };
const breweriesFetchingFailed = (error: Object): GetBreweriesFailedAction => ({ //When action failed
    type: GET_BREWERIES_FAILED,
    payload: {
        error,
    }
});

type HomerActionsType =
    | GetBreweriesInitiatedAction
    | GetBreweriesSuccessAction
    | GetBreweriesFailedAction;

type PromiseAction = Promise<HomerActionsType>;
type Dispatch = (action: HomerActionsType | ThunkAction | PromiseAction | Array<HomerActionsType>) => any;
type ThunkAction = (dispatch: Dispatch) => any;

export const fetchingBreweries = (endpoint: string, params: Object, payload: Object): ThunkAction => {
    return function (dispatch) {
        dispatch(initiateBreweriesFetching());
        return api.initiateAPICall(endpoint, "get", params, payload).then( // API call initiated
            (response) => dispatch(breweriesFetchingSucceed(response.data)),
            (error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error);
                dispatch(breweriesFetchingFailed(true));
                throw error;
            },
        );
    };
};
