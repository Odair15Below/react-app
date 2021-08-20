import { createStore, combineReducers } from 'redux';
import {userReducer} from './user';
import {appReducer} from './app';

export const store = createStore(combineReducers({
    user: userReducer,
    app: appReducer
}));
