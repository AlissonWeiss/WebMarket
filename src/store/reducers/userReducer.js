import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from '../actions/actionTypes'

const initialState = {
    nome: null,
    email: null,
    isLoggedIn: false,
    isLoading: false,
    token: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                nome: action.payload.nome,
                email: action.payload.email,
                isLoggedIn: action.payload.isLoggedIn,
                token: action.payload.token
            }
        
        case USER_LOGGED_OUT:
            return {
                ...initialState
            }
        case LOADING_USER:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
            }
        default:
            return state
    }
}

export default reducer