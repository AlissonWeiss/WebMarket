import {SET_FABRICANTE} from '../actions/actionTypes'

const initialState = {
    
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FABRICANTE:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export default reducer