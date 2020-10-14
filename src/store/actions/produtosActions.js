import {SET_POSTS, CREATING_POST, POST_CREATED} from './actionTypes'
import axios from 'axios'
import {setMessage} from './messageAction'

export const addProduct = product => {
    return (dispatch, getState) => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-webmarket-007.cloudfunctions.net/',
            method: 'post',
            data: {
                image: product.image.base64
            }
        })
            .catch(erro => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Problema ao adicionar novo produto. ' + erro
                }))
            })
            .then(resp => {
                product.image = resp.data.imageUrl
                //token passado para a regra do banco de dados
                axios.post(`/produtos.json?auth=${getState().user.token}`, {...product})
                    .catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Problema ao adicionar novo produto. ' + err
                        }))
                    })
                    .then(res => {
                        dispatch(getPosts())
                        dispatch(postCreated())
                    })
        })
    }
}

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const getPosts = () => {
    return dispatch => {
        axios.get('/produtos.json')
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Problema ao adicionar novo produto. ' + err
                }))
            })
            .then(res => {
                const rawPosts = res.data
                const posts = []
                for (let key in rawPosts){
                    posts.push(({
                        ...rawPosts[key],
                        id: key
                    }))
                }
                dispatch(setPosts(posts))
            })
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}