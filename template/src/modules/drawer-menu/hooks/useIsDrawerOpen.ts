import {shallowEqual, useSelector} from 'react-redux';
import {isOpen} from '../selectors';

export default () => {
  return useSelector(isOpen, shallowEqual);
};
