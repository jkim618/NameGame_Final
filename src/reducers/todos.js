const todos = (state=[],action) => {
    switch (action.type){
        case "ADD_TODO":
            console.log("add todo")
            let randomid = Math.random()*100;
            return[
                ...state, {id:action.id, text:action.text}
            ]
        case "DELETE_TODO":
            return[
                
            ]
        default:
            return state
    }
}

export default todos;