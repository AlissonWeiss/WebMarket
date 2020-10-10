import {ADD_PRODUCT, EXC_PRODUCT} from '../actions/actionTypes'

const initialState = {
    posts: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case EXC_PRODUCT:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer