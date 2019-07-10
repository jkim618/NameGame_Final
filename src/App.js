import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp'
import store from './store'
import {Provider} from 'react-redux'
import Posts from './containers/Posts'
import Search from './containers/Search'
import Congrats from './containers/Congrats'
import { BrowserRouter as Router, Switch, Route, Link,withRouter} from 'react-router-dom';
import Challenge from './containers/Challenge'

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/challenge" component={Challenge}/>
          </Switch>
        </Provider>
        </Router>
      </div>
    )
  }
}

export default App;
