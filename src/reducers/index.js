import { combineReducers } from 'redux';
import  todoReducer from './todoReducer';
import modulesReducer from './modulesReducer';


const rootReducer = combineReducers({
    todos :todoReducer, 
    modules :modulesReducer
})

export default rootReducer;
