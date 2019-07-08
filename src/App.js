import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp'
import store from './store'
import {Provider} from 'react-redux'
import Posts from './containers/Posts'
import Search from './containers/Search'
import Congrats from './containers/Congrats'

class App extends React.Component{
  render(){
    return(
      <div>
        <Provider store={store}>
          {/* <TodoApp/> */}
          <Search/>
          {/* <Posts/> */}
        </Provider>
       
      </div>
    )
  }
}

export default App;
