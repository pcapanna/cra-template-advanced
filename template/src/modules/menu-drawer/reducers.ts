import {handleActions} from 'redux-actions';
import {actionTypes} from './actions';

const defaultState = {
  opened: false,
};

const reducer = handleActions(
  {
    [actionTypes.TOGGLE_DRAWER_SUCCESS]: (state: any) => {
      return {...state, opened: !state.opened};
    },
    [actionTypes.OPEN_DRAWER_SUCCESS]: (state: any) => {
      return {...state, opened: true};
    },
    [actionTypes.CLOSE_DRAWER_SUCCESS]: (state: any) => {
      return {...state, opened: false};
    },
  },
  defaultState,
);

export default reducer;
