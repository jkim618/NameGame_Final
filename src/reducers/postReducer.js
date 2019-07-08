import {FETCH_POSTS, NEW_POST, GET_PICS, SEARCH_NAME, LOAD_IMAGE} from '../actions/types'

const initialState = {
    items:[], //posts that come in from our action, the fetch request
    item:{}, //single post that we add when we get response back
    pics:[],
    names:"",
    img:""
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            console.log('r u', action)
            return{
                ...state,
                items: action.payload
            }
        
        case GET_PICS:
            return{
                ...state,
                pics: action.payload
            }
            
        case SEARCH_NAME:
            console.log('r u getting the name',action)
            return{
                ...state,
                names:action.payload
            }
        case LOAD_IMAGE:
            return{
                ...state,
                img: action.payload
            }
        default:
            return{
                state
            }
    }
}