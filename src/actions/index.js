
import { ADD_TODO, REMOVE_TODO, FINISH_TODO, FETCH_TODO, ADD_MODULE, REMOVE_MODULE} from '../constants/action-types'

export function fetchTodos (){return {type:FETCH_TODO}};

export function addTodo (todos) {
    return ({type:ADD_TODO, payload:todos});
}

export function removeTodo (todos) {
    return ({type:REMOVE_TODO, payload: todos});
}

export function finishTodo (todos) {
    return ({type:FINISH_TODO, payload: todos});
}

export function addModule (modules) {
    return ({type:ADD_MODULE, payload: modules});
}

export function removeModule (modules) {
    return ({type:REMOVE_MODULE, payload: modules});
}