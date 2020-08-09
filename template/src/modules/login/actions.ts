import {createAction} from 'redux-actions';

export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_REQUESTED: 'LOGIN_REQUESTED',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_REQUESTED: 'LOGOUT_REQUESTED',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
  LOGIN_BOOTSTRAP_REQUEST: 'LOGIN_BOOTSTRAP_REQUEST',
  LOGIN_BOOTSTRAP_REQUESTED: 'LOGIN_BOOTSTRAP_REQUESTED',
  LOGIN_BOOTSTRAP_SUCCESS: 'LOGIN_BOOTSTRAP_SUCCESS',
  LOGIN_BOOTSTRAP_FAILURE: 'LOGIN_BOOTSTRAP_FAILURE',
};

export const loginRequest = createAction(actionTypes.LOGIN_REQUEST);
export const loginRequested = createAction(actionTypes.LOGIN_REQUESTED);
export const loginSuccess = createAction(actionTypes.LOGIN_SUCCESS, user => ({user}));
export const loginFailure = createAction(actionTypes.LOGIN_FAILURE);
export const logoutRequest = createAction(actionTypes.LOGOUT_REQUEST);
export const logoutRequested = createAction(actionTypes.LOGOUT_REQUESTED);
export const logoutSuccess = createAction(actionTypes.LOGOUT_SUCCESS);
export const logoutFailure = createAction(actionTypes.LOGOUT_FAILURE);
export const loginBootstrapRequest = createAction(actionTypes.LOGIN_BOOTSTRAP_REQUEST);
export const loginBootstrapRequested = createAction(actionTypes.LOGIN_BOOTSTRAP_REQUESTED);
export const loginBootstrapSuccess = createAction(actionTypes.LOGIN_BOOTSTRAP_SUCCESS);
export const loginBootstrapFailure = createAction(actionTypes.LOGIN_BOOTSTRAP_FAILURE);

export default {
  loginRequest,
  loginRequested,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutRequested,
  logoutSuccess,
  logoutFailure,
  loginBootstrapRequest,
  loginBootstrapRequested,
  loginBootstrapSuccess,
  loginBootstrapFailure,
}
