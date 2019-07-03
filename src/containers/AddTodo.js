import React from 'react'
import {connect} from 'react-redux'


class AddTodo extends React.Component{
    state={
        text:''
    }

    addTodo = (text) => {
        //update the redux store, we need to connect this
        this.props.dispatch({type:"ADD_TODO", text})
        this.setState({text:''})
        console.log("hi hi text" + text)
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.text} 
                        onChange={(e)=>{this.setState({text:e.target.value})}}></input>
                <button onClick={()=>this.addTodo(this.state.text)}>Add</button>
            </div>
        )
    }
}



export default connect()(AddTodo);