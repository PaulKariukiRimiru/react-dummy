import { ADD_TODO, REMOVE_TODO, FINISH_TODO, FETCH_TODO } from '../constants/action-types';

const initialState = {
    todos:["one", "two"]
}; 
const todoReducer = function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO:
            return {...state.todos}
            break;
        case ADD_TODO:
            return {...state, todos:[...state.todos, action.payload]} 
            break;
        case REMOVE_TODO:
            return {...state, todos:[...state.todos.slice(0, action.payload), 
                                    ...state.todos.slice(action.payload + 1)]}
            break;
        case FINISH_TODO:
            return {...state, todos:[...state.todos.slice(0, action.index), 
                                    ...state.todos[action.index]+1,
                                    ...state.todos.slice(action.index +1)]}
            
            break;
        default:
            return state
            break;
    }
};

export default todoReducer;