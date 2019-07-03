export const FETCH_POSTS = "FETCH_POSTS"
export const NEW_POST = "NEW_POST"
export const GET_PICS = "GET_PICS"
export const SEARCH_NAME = "SEARCH_NAME"

export const getApiData = (info) => {
    let newArray=[];
    info.forEach((x)=>{
        if(x.headshot.url!=null){
            newArray.push(x)
        }
    })
    console.log("all the info", newArray)
    return {
        type: FETCH_POSTS, 
        payload: newArray
    }
}