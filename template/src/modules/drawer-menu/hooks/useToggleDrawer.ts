import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {toggleDrawerSuccess} from '../actions';

const useToggleDrawer = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(toggleDrawerSuccess());
  }, []);
};

export default useToggleDrawer;
