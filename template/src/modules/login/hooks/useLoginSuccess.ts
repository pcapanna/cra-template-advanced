import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../actions';

const useLoginSuccess = () => {
  const dispatch = useDispatch();
  return useCallback((user) => {
    dispatch(loginSuccess(user));
  }, []);
};

export default useLoginSuccess;
