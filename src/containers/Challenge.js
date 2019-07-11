import React from 'react';
import {connect} from 'react-redux'
import {fetchPosts, loadMatthewImage} from '../actions/postActions'

class Challenge extends React.Component{
    constructor(props){
        super();
        this.state={
            matthew:"",
            msg:""
        }
        this.checkMatthew=this.checkMatthew.bind(this);
        this.checkMatt=this.checkMatt.bind(this);
        this.getNextMatthew=this.getNextMatthew.bind(this);
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    componentWillReceiveProps(newProps){
        console.log(newProps.matthewImg)
        newProps.matthewImg&&this.setState({
            matthew:newProps.matthewImg.firstName
        })
    }

    checkMatthew(){
        console.log('checking matthew')
        console.log(this.props.matthewImg.firstName)
        if(this.state.matthew.toLowerCase()=="matthew"){
            this.setState({
                msg:"Correct!"
            })
        }
        else{
            this.setState({
                msg:"Incorrect!"
            })
        }
    }

    checkMatt(){
        if(this.state.matthew.toLowerCase()=="matt"){
            this.setState({
                msg:"Correct!"
            })
        }
        else{
            this.setState({
                msg:"Incorrect!"
            })
        }
    }

    getNextMatthew(){
        console.log('getting next matthew')
        let randomIndex = Math.floor(Math.random()*11)
        let randomImg = this.props.matthews[randomIndex]
        this.props.loadMatthewImage(randomImg)
    }

    render(){
        return(
            <div class="challengepage">
                <div class="description">
                    <h1>Challenge Mode </h1>
                    <p> Matthew or Matt? </p>
                </div>
                <div class="search">
                    {this.props.matthewImg&&<img src={this.props.matthewImg.headshot.url} style={{width:'150px'}} />}
                    <br/>
                    <br/>
                    <button onClick={this.checkMatthew}>Matthew</button>
                    <button onClick={this.checkMatt}>Matt</button>
                    <br/><button onClick={this.getNextMatthew}>Next</button>
                    
                </div>
                {this.state.msg}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        matthews: state.matthews,
        matthewImg: state.matthewImg
    }
}

export default connect(mapStateToProps,{fetchPosts,loadMatthewImage})(Challenge);