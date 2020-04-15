import {shallowEqual, useSelector} from 'react-redux';
import {isOpened} from '../selectors';

export default () => {
  return useSelector(isOpened, shallowEqual);
};
