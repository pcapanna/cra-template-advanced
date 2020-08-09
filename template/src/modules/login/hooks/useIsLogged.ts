import {shallowEqual, useSelector} from 'react-redux';
import {isLogged} from '../selectors';

export default () => {
  return useSelector(isLogged, shallowEqual);
};
