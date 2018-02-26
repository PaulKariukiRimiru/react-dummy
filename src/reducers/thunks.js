
import {addTodo, fetchTodos} from '../actions/index';

export  function addTodoToList(todo){
    return function (dispatch) {
        return addTodo(todo).then(
            () =>{
                fetchTodos()
            }
        )
    };
}

export  function fetchTodosThunk() {

    return function (dispatch) {
        return fetchTodos();
    }
    
}
