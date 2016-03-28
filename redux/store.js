import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


// add all middleware here
// eg: redux-logger, redux-thunk
// thunk middleware will see if action passes an object or function
// if object, it will execute it immediately otherwise asynchronously
let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)


export default function configureStore(initialState = { todos: [], user: {} }) {
  return finalCreateStore(rootReducer, initialState)
}
