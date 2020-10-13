import {SET_FABRICANTE} from './actionTypes'
import axios from 'axios'

export const addFabricante = fabricante => {
    return dispatch => {
        axios.post('/fabricantes.json', {...fabricante})
            .catch(err => console.log(err))
    }
}

export const setFabricante = fabricante => {
    return {
        type: SET_FABRICANTE,
        payload: posts
    }
}

