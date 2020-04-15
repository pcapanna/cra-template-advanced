import { createAction } from 'redux-actions';
import {MODULE_NAME} from "./constants";

export const actionTypes = {
    BOOTSTRAP_REQUEST: `${MODULE_NAME}|BOOTSTRAP_REQUEST`,
    BOOTSTRAP_SUCCESS: `${MODULE_NAME}|BOOTSTRAP_SUCCESS`,
    RESET_APP: `${MODULE_NAME}|RESET_APP`,
};

export const bootstrapRequest = createAction(actionTypes.BOOTSTRAP_REQUEST);
export const bootstrapSuccess = createAction(actionTypes.BOOTSTRAP_SUCCESS);
export const resetApp = createAction(actionTypes.RESET_APP);

export default {
    bootstrapRequest,
    bootstrapSuccess,
    resetApp
}
