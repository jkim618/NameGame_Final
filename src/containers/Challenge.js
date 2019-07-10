import React from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'

class Challenge extends React.Component{
    componentDidMount(){
        this.props.fetchPosts()
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
                    <button>Matthew</button>
                    <button>Matt</button>
                </div>
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

export default connect(mapStateToProps,{fetchPosts})(Challenge);