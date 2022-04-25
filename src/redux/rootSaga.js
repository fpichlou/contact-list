import { all, fork } from 'redux-saga/effects';
import contactSaga from './contacts/saga';

export default function* rootSaga() {
    yield all([
        fork(contactSaga),
    ]);
}
