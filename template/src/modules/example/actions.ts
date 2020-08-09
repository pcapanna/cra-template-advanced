import {createAction} from 'redux-actions';

export const actionTypes = {
  LOAD_PRODUCTS_REQUEST: 'LOAD_PRODUCTS_REQUEST',
  LOAD_PRODUCTS_REQUESTED: 'LOAD_PRODUCTS_REQUESTED',
  LOAD_PRODUCTS_SUCCESS: 'LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS_FAILURE: 'LOAD_PRODUCTS_FAILURE',
  RANDOM_ACTION: 'RANDOM_ACTION'
};

export const loadProductsRequest = createAction(actionTypes.LOAD_PRODUCTS_REQUEST);
export const loadProductsRequested = createAction(actionTypes.LOAD_PRODUCTS_REQUESTED);
export const loadProductsSuccess = createAction(actionTypes.LOAD_PRODUCTS_SUCCESS);
export const loadProductsFailure = createAction(actionTypes.LOAD_PRODUCTS_FAILURE);
export const randomAction = createAction(actionTypes.RANDOM_ACTION);

export default {
  loadProductsRequest,
  loadProductsRequested,
  loadProductsSuccess,
  loadProductsFailure,
  randomAction
}
