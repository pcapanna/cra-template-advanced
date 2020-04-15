import {all, put, takeEvery} from "redux-saga/effects";
import actions, {actionTypes} from "./actions";

function* handleBootstrap() {
    yield put(actions.bootstrapSuccess());
}

export default function* () {
    yield all([
        yield takeEvery(actionTypes.BOOTSTRAP_REQUEST, handleBootstrap),
    ]);
}
