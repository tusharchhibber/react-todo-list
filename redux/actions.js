var constants = {
	ADD_TODO: 'ADD_TODO',
	TEXT: 'some string that the user inputted'
}

let actions = {
	addTodo: function(text) {
		return {
			type: constants.ADD_TODO,
			text: text
		}
	}
}

export default actions
//store.dispatch(addTodo('some text'))