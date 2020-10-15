import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from './actionTypes'
import axios from 'axios'
import {setMessage} from './messageAction'

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
        .catch(err => {
            dispatch(setMessage({
                title: 'Login inválido',
                text: 'Email ou senha incorretos!'
            }))
        })
        .then(res => {
            if (res.data.localId){
                user.token = res.data.idToken
                axios.get(`/users/${res.data.localId}.json`)
                .catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Ocorreu um erro inesperado ao efetuar login!'
                    }))
                })
                .then(res => {
                    delete user.password
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
        .catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado ao registrar novo usuário!'
            }))
        })
        .then(res => {
            if (res.data.localId){
                axios.put(`/users/${res.data.localId}.json`, {
                    nome: user.nome,
                })
                .catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Ocorreu um erro inesperado ao registrar novo usuário!'
                    }))
                })
                .then(() => {
                    dispatch(login(user))
                })
            }
        })
    }
}