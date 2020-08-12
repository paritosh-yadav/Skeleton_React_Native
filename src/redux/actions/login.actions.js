import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "../constants/login.constants";
export const restoreToken = (userToken) => ({
    type: RESTORE_TOKEN,
    token: userToken
});
export const signIn = (token) => ({
    type: SIGN_IN,
    token,
});
export const signOut = () => ({
    type: SIGN_OUT,
});
