import {handleActions} from 'redux-actions';
import {actionTypes} from './actions';

const defaultState = {
  open: false,
};

const reducer = handleActions(
  {
    [actionTypes.TOGGLE_DRAWER_SUCCESS]: (state: any) => {
      return {...state, open: !state.open};
    },
    [actionTypes.OPEN_DRAWER_SUCCESS]: (state: any) => {
      return {...state, open: true};
    },
    [actionTypes.CLOSE_DRAWER_SUCCESS]: (state: any) => {
      return {...state, open: false};
    },
  },
  defaultState,
);

export default reducer;
