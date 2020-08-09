import {shallowEqual, useSelector} from 'react-redux';
import {isRandomActionMade} from "../selectors";

export default () => {
  return useSelector(isRandomActionMade, shallowEqual);
};
