import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import sagas from './rootSaga';


const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    const appStore = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });
    sagaMiddleware.run(sagas);

    return appStore;
}

export default store
