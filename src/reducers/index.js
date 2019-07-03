import {combineReducers} from 'redux'
import todos from './todos'
import postReducer from './postReducer'

export default combineReducers({
    todos: todos,
    posts: postReducer
})