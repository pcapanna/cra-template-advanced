import {shallowEqual, useSelector} from 'react-redux';
import {getProducts} from '../selectors';

export default () => {
  return useSelector(getProducts, shallowEqual);
};
