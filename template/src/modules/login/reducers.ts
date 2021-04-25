import {combineActions, handleActions} from 'redux-actions';
import {actionTypes} from './actions';

export interface State {
  loginError?: boolean,
  loginInProgress?: boolean,
  loadingProducts: boolean,
  user?: any
}

const defaultState: State = {
  loadingProducts: false
};

const reducer = handleActions(
  {
    [actionTypes.LOGIN_FAILURE]: (state: State) => {
      return {...state, loginError: true};
    },
    // @ts-ignore
    [combineActions(actionTypes.LOGIN_BOOTSTRAP_SUCCESS, actionTypes.LOGIN_SUCCESS)]:
      (state: State, {payload: {user}}: { payload: { user: any[] } }) => {
        return {...state, user, loginError: false};
      },
    [actionTypes.LOGOUT_SUCCESS]: (state: State) => {
      return {...state, user: undefined};
    }
  },
  defaultState,
);

export default reducer;
