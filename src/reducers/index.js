import { combineReducers } from 'redux';
import  todoReducer from './todoReducer';
import fetchReducer from './fetchReducers';

const rootReducer = combineReducers({
    fetchReducer,
    todos :todoReducer
})

export default rootReducer;
