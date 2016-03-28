import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

//This is a Smart Component
class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

// used to pass actions from start (as state)
// otherwise u have dispatch in your props and 
// you have to send this.props.dispatch to each component needed 
// and this.props.dispatch(action) in components to pass actions to reducer
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
