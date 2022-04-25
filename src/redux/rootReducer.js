import { combineReducers } from 'redux';
import contactSlice from './contacts/slice';

const reducers = combineReducers({
    contact: contactSlice,
});

export default reducers;
