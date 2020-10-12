import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import produtosReducer from './reducers/produtosReducer'

const reducers = combineReducers({
    user: userReducer,
    posts: produtosReducer,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig