import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {randomAction} from "../actions";

const useMakeRandomAction = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(randomAction());
  }, []);
};

export default useMakeRandomAction;
