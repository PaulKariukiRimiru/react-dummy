import { FETCH_TODO } from '../constants/action-types';

const fetchReducer = function (state={}, action){
    switch (action.type) {
        case FETCH_TODO:
            return {...state.todos}
            break;
    
        default:
            return {...state}
            break;
    }
}

export default fetchReducer;
