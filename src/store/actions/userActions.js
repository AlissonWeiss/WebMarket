import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED, CREATING_USER} from './actionTypes'
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

export const criatingUser = () => {
    return {
        type: CREATING_USER
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
                    user.image = res.data.image
                    user.telefone = res.data.telefone
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
    }
}
export const createUser =  user => {
    return dispatch => {
        dispatch(criatingUser())
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(() => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado ao registrar novo usuário!'
            }))
        })
        .then(res => {
            if (res.data.localId){
                axios({
                    url: 'uploadImage',
                    baseURL: 'https://us-central1-webmarket-007.cloudfunctions.net/',
                    method: 'post',
                    data: {
                        image: user.image.base64
                    }
                })
                .catch(() => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Ocorreu um erro ao salvar a imagem de perfil!'
                    }))
                })
                .then(resp => {
                    axios.put(`/users/${res.data.localId}.json`, {
                        nome: user.nome,
                        image: resp.data.imageUrl,
                        telefone: user.telefone
                    })
                    .catch(() => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Ocorreu um erro inesperado ao registrar novo usuário!'
                        }))
                    })
                    .then(() => {
                        dispatch(login(user))
                    })
                })
            }
        })
    }
}