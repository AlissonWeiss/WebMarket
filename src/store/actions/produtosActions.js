import {SET_POSTS, EXC_PRODUCT, CREATING_POST, POST_CREATED} from './actionTypes'
import axios from 'axios'

export const addProduct = product => {
    return dispatch => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-webmarket-007.cloudfunctions.net/',
            method: 'post',
            data: {
                image: product.image.base64
            }
        })
            .catch(erro => console.log(erro))
            .then(resp => {
                product.image = resp.data.imageUrl
                axios.post('/produtos.json', {...product})
                    .catch(err => console.log(err))
                    .then(res => {
                        dispatch(getPosts())
                        dispatch(postCreated())
                    })
        })
    }
}

export const excProduct = product => {
    return {
        type: EXC_PRODUCT,
        payload: product
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
            .catch(err => console.log(err))
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