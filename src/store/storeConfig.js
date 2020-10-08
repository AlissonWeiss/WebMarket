import {createStore, combineReducers} from 'redux'
import userReducer from './reducers/userReducer'
import produtosReducer from './reducers/produtosReducer'


const reducers = combineReducers({
    user: userReducer,
    posts: produtosReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig