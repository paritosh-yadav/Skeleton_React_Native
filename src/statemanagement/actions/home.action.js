// @flow
import { CHANGE_COUNTER } from "../constants/home.constants";
type ChangeCounterAction = { type: CHANGE_COUNTER };

export const changeCounter = (): ChangeCounterAction => ({
    type: CHANGE_COUNTER,
});
