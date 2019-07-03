import {FETCH_POSTS, NEW_POST, GET_PICS, SEARCH_NAME, getApiData} from './types'
import Axios from 'axios'

export const fetchPosts = () => dispatch => { 
        fetch('https://www.willowtreeapps.com/api/v1.0/profiles')
        .then(res => res.json())
        .then(posts => {
            dispatch(getApiData(posts))
            let randomIndex = Math.floor(Math.random()*167)
            dispatch(
                {
                type:GET_PICS,
                payload: posts[randomIndex]
            })
        })
}

export const nameSearch = (name) => {
    console.log("searching",name)
    return{
        type:SEARCH_NAME,
        payload:name
    }
}

export const getPics = () => {
    console.log('getting pics')
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