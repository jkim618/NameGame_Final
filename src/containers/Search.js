import React from 'react';
import {connect} from 'react-redux'
import {nameSearch,fetchPosts, loadImage} from '../actions/postActions'
import { thisExpression } from '@babel/types';
import '../App.scss'

class Search extends React.Component{
    constructor(props){
        super();
        this.state={
            keyword:"",
            //inputKeyword:"",
            mounted: false,
            result:false,
            errorMsg:"",
            count:0
            //sg:""
        }
        //this.searchName=this.searchName.bind(this);
        this.getMorePics=this.getMorePics.bind(this);
    }

    searchName = (e) => {
        e.preventDefault();
        //console.log(this.props.img.firstName)
        //this.props.nameSearch(keyword) no
        let result = this.props.img&&
            this.props.img.firstName.toLowerCase()==this.state.keyword.toLowerCase();
        if (result===false){
            this.setState({
                errorMsg: "Incorrect! Try again!",
                keyword: "",
                count:this.state.count-1
            })
        }
        if(result===true){
            this.setState({
                count:this.state.count + 1,
                errorMsg: "Correct!"
            })
        }
    }

    componentDidMount(){
       // console.log("get more pics",this.props.pics.firstName)
        this.props.fetchPosts();
        this.setState({
            keyword:'',
            nextClicked: !this.state.nextClicked,
            mounted: true
        })
    }

    getMorePics(){
        let randomIndex = Math.floor(Math.random()*167)
        let randomImg = this.props.images[randomIndex]
        this.props.loadImage(randomImg)
        this.setState({
            errorMsg: '',
            keyword:''})
    }

    render(){
        console.log("outputting props", this.props.img)
        return(
            <div>
                <form onSubmit={this.searchName}>
                   { this.props.img && <img src={this.props.img.headshot.url} style={{width:"150px"}}/>}
                    <h3>Search Name: </h3>
                    <input type="text" value={this.state.keyword}
                        onChange={(e)=>this.setState({keyword:e.target.value})}></input>
                    <button type="submit">Search</button>
                    {/* {this.state.result&&
                        <div>
                            <p>Correct! Click Next for more!</p>
                            <button onClick={()=>this.getMorePics()}>Next!</button>
                        </div> }
                    */}
                    <br/>
                    {this.state.errorMsg}
                    {this.state.errorMsg === "Correct!" ? 
                        <div>
                            <button onClick={this.getMorePics}>next</button>
                        </div> 
                        : null}
                </form>
                <div>
                Your current score: {this.state.count}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log(state.posts.items)
    return{
        names: state.posts.names,
        img: state.posts.img,
        images: state.posts.items
    }
}

export default connect(mapStateToProps,{nameSearch,fetchPosts,loadImage})(Search);