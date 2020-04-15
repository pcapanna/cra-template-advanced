import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from "redux";
import * as MenuDrawerModule from '../modules/menu-drawer';
import * as AppModule from "../modules/app";

import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import logger from 'redux-logger';
import {Action} from "redux-actions";

function* sagas() {
    return yield all([AppModule.sagas()]);
}

// reducers
const appReducer = combineReducers({
    [AppModule.MODULE_NAME]: AppModule.reducers,
    [MenuDrawerModule.MODULE_NAME]: MenuDrawerModule.reducers,
});

const rootReducer = (state: any, action: Action<any>) => {
    if (action.type === AppModule.actionTypes.RESET_APP) {
        state = undefined;
    }

    return appReducer(state, action);
};

// sagas
const sagaMiddleware = createSagaMiddleware();

const middlewares = [...getDefaultMiddleware(), logger, sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: middlewares
});
// run sagas
sagaMiddleware.run(sagas);

export default store;
