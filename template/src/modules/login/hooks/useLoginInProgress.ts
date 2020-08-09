import {shallowEqual, useSelector} from 'react-redux';
import {loginInProgress} from '../selectors';

export default () => {
  return useSelector(loginInProgress, shallowEqual);
};
