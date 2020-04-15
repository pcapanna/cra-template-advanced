import {useCallback} from 'react';
import {useDispatch} from 'react-redux/lib/hooks/useDispatch';
import {closeDrawerSuccess} from '../actions';

const useCloseDrawer = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(closeDrawerSuccess());
  }, []);
};

export default useCloseDrawer;
