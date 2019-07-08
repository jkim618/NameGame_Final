import React from 'react'
import {connect} from 'react-redux'
import Axios from 'axios';
import {fetchPosts, getPics} from '../actions/postActions'


class Posts extends React.Component{
    componentWillMount(){
       // this.props.fetchPosts();
    }

    getPics = () => {
        //let randomIndex = Math.floor(Math.random()*167)
        this.props.fetchPosts();
    }

    render(){
        //console.log(this.props.posts)     
        return(
            <div>
                {/*<button onClick={()=>this.fetchPosts()}>hihi fetch</button>*/}
                {/*{this.props.posts && this.props.posts.map(post => <div key={post.id}>
                    <img src={post.headshot.url} style={{width:"200px"}}/></div>)}*/} 
                <button onClick = {()=>this.getPics()}>Skip</button>
                <br/>
                {this.props.pics && <img src={this.props.pics.headshot.url} style={{height:"150px"}}/>} 
            </div>
        )
    }
}
    function mapStateToProps(state){
        return{
            posts: state.posts.items,
            pics: state.posts.pics
        }
    }

export default connect(mapStateToProps,{fetchPosts})(Posts);