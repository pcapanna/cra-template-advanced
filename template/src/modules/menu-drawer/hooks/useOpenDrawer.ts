import {useCallback} from 'react';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {openDrawerSuccess} from '../actions';

const useOpenDrawer = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(openDrawerSuccess());
  }, []);
};

export default useOpenDrawer;
