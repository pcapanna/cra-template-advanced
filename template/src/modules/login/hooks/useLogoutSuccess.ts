import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {logoutSuccess} from '../actions';

const useLogoutSuccess = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(logoutSuccess());
  }, []);
};

export default useLogoutSuccess;
