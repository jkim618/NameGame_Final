import React from 'react';
import {connect} from 'react-redux'
import {nameSearch,fetchPosts, loadImage, increaseCount, decreaseCount} from '../actions/postActions'
import { thisExpression } from '@babel/types';
import '../App.scss'

class Search extends React.Component{
    constructor(props){
        super();
        this.state={
            keyword:"",
            mounted: false,
            result:false,
            errorMsg:""
        }
        //this.searchName=this.searchName.bind(this);
        this.getMorePics=this.getMorePics.bind(this);
        this.onClickCount = this.onClickCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
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
            this.decreaseCount();
        }
        if(result===true){
            this.setState({
                count:this.state.count + 1,
                errorMsg: "Correct!",
                //newcount:this.props.increaseCount
            })
            this.onClickCount();
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

    skip(){
        this.props.fetchPosts();
    }


    onClickCount() {
        let currentCount = this.props.count;
        currentCount = currentCount + 1;
        this.props.increaseCount(currentCount)
    }

    decreaseCount() {
        let currentCount= this.props.count;
        currentCount--;
        this.props.decreaseCount(currentCount)
    }

    render(){
        return(
            <div>
                <div class="description">
                    <h1>Name Game</h1>
                    <p>Instruction: Guess your coworkers' names! If you guess right, your score will increase by one.
                        If you guess wrong, your score will decrease. 
                    </p>
                </div>
                <form class="search" onSubmit={this.searchName}>
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
                    <div class="error">
                        <p>{this.state.errorMsg}</p>
                        {this.state.errorMsg === "Correct!" ? 
                            <div>
                                <button onClick={this.getMorePics}>next</button>
                            </div> 
                            : null}
                    </div>
                </form>
                <div class="score">
                    Your current score: {this.props.count}
                </div>
                <div class="congrats">
                    {this.state.count==5?<p>Congrats!</p>:null}
                    {/* <button onClick={this.onClickCount}>Increase Count</button>
                    <p style={{color:"white"}}>{this.props.count}</p>
                    <button onClick={this.decreaseCount}>Decrease Count</button> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state.img)
    return{
        names: state.names,
        img: state.img,
        images: state.items,
        count: state.count
    }
}

export default connect(mapStateToProps,{nameSearch,fetchPosts,loadImage, increaseCount, decreaseCount})(Search);