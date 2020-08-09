import React from 'react';
import {call, put, takeEvery, all} from "redux-saga/effects";
import {actionTypes, loadProductsFailure, loadProductsRequested, loadProductsSuccess} from "./actions";
import {toast} from "react-toastify";
import {MockProductsApi} from "../../services";

function* handleLoadProducts() {
  try {
    yield put(loadProductsRequested());
    debugger;
    const products = yield call([MockProductsApi, 'listProducts'], {term: ""});

    yield put(loadProductsSuccess({products}));
  } catch (error) {
    // eslint-disable-next-line react/react-in-jsx-scope
    toast.error(<span>Error loading products!<br/>
      {error.response ? error.response.statusText + ": " : ""}{error.message}</span>);
    yield put(loadProductsFailure());
  }
}

export default function* () {
  yield all([
    yield takeEvery<any>([actionTypes.LOAD_PRODUCTS_REQUEST], handleLoadProducts),
  ])
}
