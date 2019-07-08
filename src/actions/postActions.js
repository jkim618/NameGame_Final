import {FETCH_POSTS, NEW_POST, GET_PICS, SEARCH_NAME, getApiData, LOAD_IMAGE, INCREASE_COUNT, DECREASE_COUNT} from './types'
import Axios from 'axios'

export const fetchPosts = () => dispatch => { 
        fetch('https://www.willowtreeapps.com/api/v1.0/profiles')
        .then(res => res.json())
        .then(posts => {
            dispatch(getApiData(posts))
            let randImg = getOnePic(posts);
            dispatch(loadImage(randImg));
        })
}

export const getOnePic = (posts) => {
    let randomIndex = Math.floor(Math.random()*167)
    let randomImg = posts[randomIndex]
    return randomImg
}

export const nameSearch = (name) => {
    return{
        type:SEARCH_NAME,
        payload:name
    }
}

export const increaseCount = (count) => {
    return{
        type:INCREASE_COUNT,
        payload:count

    }
}

export const decreaseCount = (count) => {
    return{
        type: DECREASE_COUNT,
        payload: count
    }
}

export const getPics = () => {
    let thePic = [];
    let randomIndex = Math.floor(Math.random()*167)
    Axios.get('https://www.willowtreeapps.com/api/v1.0/profiles').then(res=>
        //console.log(res.data[randomIndex]))
        thePic.push(res.data[randomIndex]))
        return{
            type:GET_PICS,
            payload:thePic
        }
}

export const loadImage = (image) => {
    return {
        type: LOAD_IMAGE,
        payload: image
    }
}