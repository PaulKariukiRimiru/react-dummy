import { ADD_TODO, REMOVE_TODO, FINISH_TODO, FETCH_TODO } from '../constants/action-types';

const initialState = {
    todos:["one", "two"]
}; 
const todoReducer = function (state = initialState, action) {
    console.log("action", action)
    console.log("current state", {...state})
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos:[...state.todos, action.payload]} 
            break;
        case REMOVE_TODO:
            return {...state, todos:[...state.todos.slice(0, action.payload), 
                                    ...state.todos.slice(action.payload + 1)]}
            break;
        case FINISH_TODO:
            return {...state, todos:[...state.todos.slice(0, action.payload.index), 
                                    ...state.todos[action.payload.index]+1,
                                    ...state.todos.slice(action.payload.index +1)]}
            
            break;
        default:
            return state
            break;
    }
};

export default todoReducer;