
import { ADD_TODO, REMOVE_TODO, FINISH_TODO, FETCH_TODO} from '../constants/action-types'

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
