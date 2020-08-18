// @flow
import { CHANGE_COUNTER } from "../constants/home.constants";
type State = { +counter: number };
type ChangeCounterAction = { +type: CHANGE_COUNTER };
const initialState = {
    counter: 0,
};
const homerReducer = (state: State = initialState, action: ChangeCounterAction): State => {
    switch (action.type) {
        case CHANGE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        default:
            return state;
    }
};

export default homerReducer;
