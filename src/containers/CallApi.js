import React from 'react'

class CallApi extends React.Component{
    CallApi = () => {
        //update the redux store, we need to connect this
        this.props.dispatch({type:"CALL_API"})
    }

    render(){
        return(
            <div>  
                <button>Call API</button>
            </div>
        )
    }
}

export default CallApi