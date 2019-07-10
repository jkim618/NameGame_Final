export const FETCH_POSTS = "FETCH_POSTS"
export const NEW_POST = "NEW_POST"
export const GET_PICS = "GET_PICS"
export const SEARCH_NAME = "SEARCH_NAME"
export const LOAD_IMAGE = "LOAD_IMAGE"
export const INCREASE_COUNT = "INCREASE_COUNT"
export const DECREASE_COUNT = "DECREASE_COUNT"
export const GET_MATTHEW = "GET_MATTHEW"
export const LOAD_MATTHEW_IMAGE = "LOAD_MATTHEW_IMAGE"

//used in fetchposts - filtering images without url
export const getApiData = (info) => {
    console.log("api data function")
    let newArray=[];
    info.forEach((x)=>{
        if(x.headshot.url!=null){
            newArray.push(x)
        }
    })
    return {
        type: FETCH_POSTS, 
        payload: newArray
    }
}

export const getMatthew = (matthew) => {
    return{
        type:GET_MATTHEW,
        payload: matthew
    }
}
