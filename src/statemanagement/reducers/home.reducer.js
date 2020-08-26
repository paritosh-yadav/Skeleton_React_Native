/**
 * @flow
 */
import {
    CHANGE_COUNTER,
    GET_BREWERIES_FAILED,
    GET_BREWERIES_SUCCEED,
    GET_BREWERIES_INITIATED,
} from "../constants/home.constants";

type State = {
    +counter: number,
    +fetchingBreweriesList: boolean,
        +breweriesList: null | Array < number >,
            +breweriesListError: null | Object,
};
type ChangeCounterAction = { +type: CHANGE_COUNTER };
type GetBreweriesInitiatedAction = { +type: GET_BREWERIES_INITIATED };
type GetBreweriesSuccessAction = { +type: GET_BREWERIES_SUCCEED, +payload: Object };
type GetBreweriesFailedAction = { +type: GET_BREWERIES_FAILED, +payload: Object };

type HomerActionsType =
    & ChangeCounterAction
    & GetBreweriesInitiatedAction
    & GetBreweriesSuccessAction
    & GetBreweriesFailedAction;

const initialState = {
    counter: 0,
    fetchingBreweriesList: false,
    breweriesList: null,
    breweriesListError: null,
};
const homerReducer = (state: State = initialState, action: HomerActionsType): State => {
    switch (action.type) {
        case CHANGE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case GET_BREWERIES_INITIATED:
            return {
                ...state,
                fetchingBreweriesList: true,
                breweriesList: null,
                breweriesListError: null,
            };
        case GET_BREWERIES_SUCCEED:
            const { data } = action.payload;
            return {
                ...state,
                fetchingBreweriesList: false,
                breweriesList: data,
                breweriesListError: null,
            };
        case GET_BREWERIES_FAILED:
            const { error } = action.payload;
            return {
                ...state,
                fetchingBreweriesList: false,
                breweriesListError: error,

            };
        default:
            return state;
    }
};

export default homerReducer;
