import {handleActions} from 'redux-actions';
import {actionTypes} from './actions';
import {Product} from "../../model/Product";

export interface State {
  products: Product[],
  randomActionMade: boolean,
  loadingProducts: boolean,
}

const defaultState: State = {
  products:[],
  randomActionMade: false,
  loadingProducts: false
};

const reducer = handleActions(
  {
    [actionTypes.RANDOM_ACTION]: (state: State): State => {
      return {...state, randomActionMade: true};
    },
    [actionTypes.LOAD_PRODUCTS_REQUEST]: (state: State): State => {
      return {...state, loadingProducts: true};
    },
    [actionTypes.LOAD_PRODUCTS_FAILURE]: (state: State): State => {
      return {...state, loadingProducts: false};
    },
    [actionTypes.LOAD_PRODUCTS_SUCCESS]: (state: State, {payload: {products}}: { payload: { products: Product[] } }): State => {
      return {...state, products, loadingProducts: false};
    }
  },
  defaultState,
);

export default reducer;
