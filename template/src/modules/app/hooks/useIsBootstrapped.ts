import {shallowEqual, useSelector} from 'react-redux';
import {isBootstrapped} from '../selectors';

export default () => {
  return useSelector(isBootstrapped, shallowEqual);
};
