import {SET_POSTS, EXC_PRODUCT, CREATING_POST, POST_CREATED} from '../actions/actionTypes'

const initialState = {
    posts: [],
    isUploading: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case EXC_PRODUCT:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case CREATING_POST:
            return {
                ...state,
                isUploading: true
            }
        case POST_CREATED:
            return {
                ...state,
                isUploading: false
            }
        default:
            return state
    }
}

export default reducer