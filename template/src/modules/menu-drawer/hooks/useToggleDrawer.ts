import {useCallback} from 'react';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {toggleDrawerSuccess} from '../actions';

const useToggleDrawer = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(toggleDrawerSuccess());
  }, []);
};

export default useToggleDrawer;
