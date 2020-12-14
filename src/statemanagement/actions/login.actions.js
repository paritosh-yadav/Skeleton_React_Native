/**
 * @flow
 */
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from '../constants/login.constants';

type RestoreTokenAction = { type: RESTORE_TOKEN, token: string };
type SignInAction = { type: SIGN_IN, token: string };
type SignOutAction = { type: SIGN_OUT };

export const restoreToken = (token: string): RestoreTokenAction => ({
    type: RESTORE_TOKEN,
    token,
});
export const signIn = (token: string): SignInAction => ({
    type: SIGN_IN,
    token,
});
export const signOut = (): SignOutAction => ({
    type: SIGN_OUT,
});
