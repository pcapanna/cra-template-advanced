import {shallowEqual, useSelector} from 'react-redux';
import {getUser} from '../selectors';
import User from "../components/google/User";

export default (): User => {
  return useSelector(getUser, shallowEqual);
};
