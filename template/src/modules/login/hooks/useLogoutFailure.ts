import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {logoutFailure} from '../actions';

const useLogoutFailure = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(logoutFailure());
  }, []);
};

export default useLogoutFailure;
