import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null,
    isLoggedIn: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                isLoggedIn: action.payload.isLoggedIn
            }
        
        case USER_LOGGED_OUT:
            return {
                ...state,
                name: null,
                email: null,
                isLoggedIn: false,
            }
        default:
            return state
    }
}

export default reducer