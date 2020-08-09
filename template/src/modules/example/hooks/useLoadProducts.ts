import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {loadProductsRequest} from "../actions";

const useLoadProducts = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(loadProductsRequest());
  }, []);
};

export default useLoadProducts;
