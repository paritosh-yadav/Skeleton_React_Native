/**
 * @flow
 */
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "../constants/login.constants";
type State = {
    +isLoading: boolean,
    +isSignout: boolean,
        +userToken: Object,
};

type RestoreTokenAction = { type: RESTORE_TOKEN, token: string, };
type SignInAction = { type: SIGN_IN, token: string, };
type SignOutAction = { type: SIGN_OUT, };

type ActionType = SignOutAction & RestoreTokenAction & SignInAction;

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
};
const loginReducer = (state: State = initialState, action: ActionType): State => {
    switch (action.type) {
        case RESTORE_TOKEN:
            return {
                ...state,
                userToken: action.token,
                isLoading: false,
            };
        case SIGN_IN:
            return {
                ...state,
                isSignout: false,
                userToken: action.token,
            };
        case SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
            };
        default:
            return state;
    }
};

export default loginReducer;
