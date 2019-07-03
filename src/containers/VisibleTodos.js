import React from 'react'
import {connect} from 'react-redux'

class VisibleTodos extends React.Component{
    
    render(){
        return(
            <div>
                {this.props.todos.map((todo,i)=>{
                    return(
                        <div>
                            <li key={i}>
                            {todo.text}
                            <button onClick={()=>this.deleteTodo()}>delete</button>
                            </li>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log(state)
    return{
        todos:state.todos,
        id:state.id
    }  
}


export default connect(mapStateToProps)(VisibleTodos)