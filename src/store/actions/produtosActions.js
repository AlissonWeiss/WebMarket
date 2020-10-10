import {ADD_PRODUCT, EXC_PRODUCT} from './actionTypes'

export const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const excProduct = product => {
    return {
        type: EXC_PRODUCT,
        payload: product
    }
}