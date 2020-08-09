import {createAction} from 'redux-actions';

export const actionTypes = {
    TOGGLE_DRAWER_REQUEST: 'TOGGLE_DRAWER_REQUEST',
    TOGGLE_DRAWER_REQUESTED: 'TOGGLE_DRAWER_REQUESTED',
    TOGGLE_DRAWER_SUCCESS: 'TOGGLE_DRAWER_SUCCESS',
    TOGGLE_DRAWER_FAILURE: 'TOGGLE_DRAWER_FAILURE',
    CLOSE_DRAWER_REQUEST: 'CLOSE_DRAWER_REQUEST',
    CLOSE_DRAWER_REQUESTED: 'CLOSE_DRAWER_REQUESTED',
    CLOSE_DRAWER_SUCCESS: 'CLOSE_DRAWER_SUCCESS',
    CLOSE_DRAWER_FAILURE: 'CLOSE_DRAWER_FAILURE',
    OPEN_DRAWER_REQUEST: 'OPEN_DRAWER_REQUEST',
    OPEN_DRAWER_REQUESTED: 'OPEN_DRAWER_REQUESTED',
    OPEN_DRAWER_SUCCESS: 'OPEN_DRAWER_SUCCESS',
    OPEN_DRAWER_FAILURE: 'OPEN_DRAWER_FAILURE'
};

export const toggleDrawerRequest = createAction(actionTypes.TOGGLE_DRAWER_REQUEST);
export const toggleDrawerRequested = createAction(actionTypes.TOGGLE_DRAWER_REQUESTED);
export const toggleDrawerSuccess = createAction(actionTypes.TOGGLE_DRAWER_SUCCESS);
export const toggleDrawerFailure = createAction(actionTypes.TOGGLE_DRAWER_FAILURE);

export const closeDrawerRequest = createAction(actionTypes.CLOSE_DRAWER_REQUEST);
export const closeDrawerRequested = createAction(actionTypes.CLOSE_DRAWER_REQUESTED);
export const closeDrawerSuccess = createAction(actionTypes.CLOSE_DRAWER_SUCCESS);
export const closeDrawerFailure = createAction(actionTypes.CLOSE_DRAWER_FAILURE);

export const openDrawerRequest = createAction(actionTypes.OPEN_DRAWER_REQUEST);
export const openDrawerRequested = createAction(actionTypes.OPEN_DRAWER_REQUESTED);
export const openDrawerSuccess = createAction(actionTypes.OPEN_DRAWER_SUCCESS);
export const openDrawerFailure = createAction(actionTypes.OPEN_DRAWER_FAILURE);

export default {
    toggleDrawerRequest,
    toggleDrawerRequested,
    toggleDrawerSuccess,
    toggleDrawerFailure,
    closeDrawerRequest,
    closeDrawerRequested,
    closeDrawerSuccess,
    closeDrawerFailure,
    openDrawerRequest,
    openDrawerRequested,
    openDrawerSuccess,
    openDrawerFailure
}
