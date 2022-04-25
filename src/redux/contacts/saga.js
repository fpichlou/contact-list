import { call, put, all, takeEvery } from 'redux-saga/effects';
import { contactActions } from './slice';
import api from './api';

function* getContactList(action) {
    const { size = 100 } = action.payload;
    try {
        yield put(contactActions.setLoading(true));
        const response = yield call(api.getList, { size });
        const { results } = response.data
        if (results) {
            yield put(contactActions.setList(results));
        }
    } catch (e) {
        yield put(contactActions.setLoading(false));
        console.error(e)
    }
}

function* contactListWatcher() {
    yield takeEvery('contact/list', getContactList);
}

function* rootSaga() {
    yield all([
        contactListWatcher(),
    ]);
}

export default rootSaga;
