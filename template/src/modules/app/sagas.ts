import {all, put, takeEvery} from "redux-saga/effects";
import actions, {actionTypes} from "./actions";
import loginActions, {actionTypes as loginActionTypes} from "../login/actions";

function* handleBootstrap() {
    yield put(loginActions.loginBootstrapRequest());
}

function* handleBootstrapSuccess() {
    yield put(actions.bootstrapSuccess());
}

export default function* () {
    yield all([
        yield takeEvery(actionTypes.BOOTSTRAP_REQUEST, handleBootstrap),
        yield takeEvery(loginActionTypes.LOGIN_BOOTSTRAP_SUCCESS, handleBootstrapSuccess),
    ]);
}
