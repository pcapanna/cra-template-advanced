import {shallowEqual, useSelector} from 'react-redux';
import {LoginError} from '../selectors';

export default () => {
  return useSelector(LoginError, shallowEqual);
};
