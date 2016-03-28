function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) +1
}

let reducer =  function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			console.log('got to ADD_TODO case');
			return  Object.assign({}, state, {
						todos: [{
						//add new todo info
						text: action.text,
						completed: false,
						id: getId(state)
				    }, ...state.todos]
			})
		default:
			return state;
	}
}

export default reducer