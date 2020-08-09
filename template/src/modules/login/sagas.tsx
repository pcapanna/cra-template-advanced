import React from "react";
import actions, {actionTypes, loginFailure, loginSuccess, logoutFailure, logoutSuccess} from "./actions";
import {all, call, delay, put, takeEvery} from "redux-saga/effects";
import {StorageLite} from "../../services/typings";
import {DefaultLocalStorage} from "../../services";


const sagas = (
  {persistenceStorage}: {
    persistenceStorage: StorageLite;
  }) => function* () {

  //persistance util functions
  function* persistToStorage(key: string, value: string) {
    yield call([persistenceStorage, 'set'], key, JSON.stringify(value));
  }

  function* loadFromStorage(key) {
    const entityString = yield call([persistenceStorage, 'get'], key);
    return JSON.parse(entityString);
  }

  function* removeFromStorage(key) {
    yield call([persistenceStorage, 'remove'], key);
  }

  //persistance util functions

  function* handleGoogleLogoutSuccess() {
    try {
      yield delay(1000);
      yield call(removeFromStorage, 'user');
      yield call([window.location, 'assign'], "#/login");
    } catch (error) {
      console.log(error);
    }
  }

  function* handleGoogleLoginSuccess({payload: {user}}: { payload: { user: any } }) {
    try {
      yield call(persistToStorage, 'user', user);
    } catch (error) {
      console.log(error);
      yield put(loginFailure());
    }
  }


  function* handleLoginBootstrap() {
    yield put(actions.loginBootstrapRequested());

    try {
      const user = yield call(loadFromStorage, 'user');
      yield put(actions.loginBootstrapSuccess({user}));
    } catch (error) {
      console.log(error);
      yield put(actions.loginBootstrapFailure());
    }
  }

  yield all([
    yield takeEvery<any>(actionTypes.LOGOUT_SUCCESS, handleGoogleLogoutSuccess),
    yield takeEvery<any>(actionTypes.LOGIN_SUCCESS, handleGoogleLoginSuccess),
    yield takeEvery<any>(actionTypes.LOGIN_BOOTSTRAP_REQUEST, handleLoginBootstrap)
  ]);

};

export default sagas({persistenceStorage: DefaultLocalStorage});
