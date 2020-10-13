import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from '../actions/actionTypes'

const initialState = {
    nome: null,
    email: null,
    isLoggedIn: false,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                nome: action.payload.nome,
                email: action.payload.email,
                isLoggedIn: action.payload.isLoggedIn
            }
        
        case USER_LOGGED_OUT:
            return {
                ...state,
                nome: null,
                email: null,
                isLoggedIn: false,
            }
        case LOADING_USER:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default reducer