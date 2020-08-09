import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {loginFailure} from '../actions';

const useLoginFailure = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(loginFailure());
  }, []);
};

export default useLoginFailure;
