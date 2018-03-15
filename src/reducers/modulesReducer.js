import { ADD_MODULE, REMOVE_MODULE } from "../constants/action-types";

const initialState = {
    modules : []
}
const modulesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_MODULE:
            console.log("action", action)
            console.log("current state", {...state})
            return {...state, modules:[...state.modules, action.payload]}
            break;
        case REMOVE_MODULE:
            return {...state, modules:[...state.modules.slice(0, action.payload), 
                ...state.modules.slice(action.payload + 1)]}
        default:
            return state
    }
}

export default modulesReducer;