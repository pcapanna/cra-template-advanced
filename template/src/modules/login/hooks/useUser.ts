import {shallowEqual, useSelector} from 'react-redux';
import {getUser} from '../selectors';
import ExtendedUser from "../components/google/User";

export default (): ExtendedUser => {
  return useSelector(getUser, shallowEqual);
};
