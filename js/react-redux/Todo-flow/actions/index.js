var  nextTodoId: id = 0 

export const addTodo = (text: Text): Action =>({
	id: nextTodoId++,
	type:'ADD_TODO',
	text
})


export const toggleTodo = (id: Id) : Action => ({
	type:'TOGGLE_TODO',
	id
})

export const setVisibilityFilter = (filter: VisibilityFilter): Action => ({
	type:'SET_VISIBILITY_FILTER',
	filter
})