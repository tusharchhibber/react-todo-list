import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

// We can add middleware here
// There is a time when dispacher grabs state from store and passes it to reducer
// This is when we can add some middleware like redux-logger
let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)


export default function configureStore(initialState = { todos : [] }) {
	return finalCreateStore(reducer, initialState)
}