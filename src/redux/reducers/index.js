import { ADD_USER, DELETE_USER } from "../actions/types";   

const todoReducer = (state, action)=>{

    switch (action.type) {
        case ADD_USER:
        return {
            ...state,
            users:[...state.users, action.payload]
        }
        case DELETE_USER:
        return {
            ...state,
            users:state.users.filter(user=>user.id !== action.payload)
        }
    
        default:
           return state;
    }
}
export default todoReducer;