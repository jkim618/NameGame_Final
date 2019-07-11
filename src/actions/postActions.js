import {FETCH_POSTS, NEW_POST, GET_PICS, SEARCH_NAME, getApiData, getMatthew,
         LOAD_IMAGE, INCREASE_COUNT, DECREASE_COUNT, GET_MATTHEW, LOAD_MATTHEW_IMAGE} from './types'
import Axios from 'axios'

export const fetchPosts = () => dispatch => { 
        fetch('https://www.willowtreeapps.com/api/v1.0/profiles')
        .then(res => res.json())
        .then(posts => {
            dispatch(getApiData(posts))
            let mattArray=[];
            posts.forEach(x=>{
                if (x.firstName=="Matthew" || x.firstName =="Matt"){
                    mattArray.push(x)
                }
            })
            dispatch(getMatthew(mattArray))
            let randImg = getOnePic(posts);
            let matthewImg = getOneMatthewPic(mattArray)
            console.log('matthew img',matthewImg)
            console.log('random img', randImg)
            dispatch(loadMatthewImage(matthewImg))
            dispatch(loadImage(randImg));
        })
}

// getting one random pic based on random index
export const getOnePic = (posts) => {
    let randomIndex = Math.floor(Math.random()*167)
    let randomImg = posts[randomIndex]
    return randomImg
}

//getting one random matthew pic based on random
export const getOneMatthewPic = (posts) => {
    let randomIndex = Math.floor(Math.random()*11)
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

export const loadMatthewImage = (image) => {
    console.log('load matthew Img function')
    return {
        type: LOAD_MATTHEW_IMAGE,
        payload: image
    }
}