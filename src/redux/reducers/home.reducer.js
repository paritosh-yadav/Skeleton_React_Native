import { CHANGE_COUNTER } from "../constants/home.constants";
const initialState = {
    counter: 0,
};
const homerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COUNTER:
            return {
                ...state,
                counter: 1,
            };
        default:
            return state;
    }
};

export default homerReducer;
