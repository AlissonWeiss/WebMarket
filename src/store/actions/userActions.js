import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from './actionTypes'
import axios from 'axios'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyClDUkZre2HhhgssswL8UzRK4cAVuEnXVQ'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true,
        })
        .catch(error => console.log(error.response.request._response + ' 001' + 'user.password' + user.password))
        .then(res => {
            if (res.data.localId){
                axios.get(`/users/${res.data.localId}.json`)
                .catch(error => console.log(error.response.request._response))
                .then(res => {
                    user.password = null
                    user.nome = res.data.nome
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
        
    }
}

export const createUser =  user => {
    return dispatch => {
      axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(error => console.log(error.response.request._response))
        .then(res => {
            if (res.data.localId){
                axios.put(`/users/${res.data.localId}.json`, {
                    nome: user.nome,
                })
                .catch(error => console.log(error.response.request._response))
                .then(resp => {
                    console.log('Usuário criado com sucesso!')
                })
            }
        })
    }
}