import React from 'react';
import {connect} from 'react-redux'
import {nameSearch,fetchPosts} from '../actions/postActions'


class Search extends React.Component{
    constructor(props){
        super();
        this.state={
            keyword:"",
            //inputKeyword:"",
            clicked:false,
            result:false
        }
        //this.searchName=this.searchName.bind(this);
        //this.getMorePics=this.getMorePics.bind(this);
    }

    searchName = (keyword) => {
        keyword.preventDefault();
        this.props.nameSearch(keyword)
        let result = this.props.pics&&
            this.props.pics.firstName.toLowerCase()==this.state.keyword.toLowerCase();
        if (result==false){
            console.log('false')
        }
        this.setState({
            result:result
        })
       
        /*this.setState({
            clicked:true
        })*/

    }

    getMorePics = () =>{
        console.log("get more pics",this.props.pics.firstName)
        this.props.fetchPosts();
        this.setState({
            keyword:''
            //clicked:!this.state.clicked
        })
    }

    render(){
        console.log("outputting props", this.props.pics)
        return(
            <div>
                <form onSubmit={this.searchName}>
                    Search Name: <input type="text" value={this.state.keyword}
                        onChange={(e)=>this.setState({keyword:e.target.value})}></input>
                    <button type="submit">Search</button>
                    {/* <button type="idk">Hi</button> */}
                    {this.state.result&&
                        <div>
                            <p>Correct! Click Next for more!</p>
                            <button onClick={()=>this.getMorePics()}>Next!</button>
                        </div> }
                </form>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        names:state.posts.names,
        pics:state.posts.pics
    }
}

export default connect(mapStateToProps,{nameSearch,fetchPosts})(Search);