import { handleActions } from 'redux-actions';
import { actionTypes } from './actions';

export default handleActions(
  {
    [actionTypes.BOOTSTRAP_SUCCESS]: (state) => ({ ...state, bootstrapped: true }),
  },
  { bootstrapped: false }
);
