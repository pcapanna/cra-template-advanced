import {shallowEqual, useSelector} from 'react-redux';
import {isLoadingProducts} from '../selectors';

export default () => {
  return useSelector(isLoadingProducts, shallowEqual);
};
