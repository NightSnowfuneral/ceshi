import type {Todos, Todo, Id, Text, Action} from '../types'


function createTodo(id: Id, text: Text): Todo {
	return{
		id,
		text,
		completed: false
	}
}


function toggleTodo( todos: Todos, id: Id): Todos{
	return todos.map(t =>{
		if (t.id !== id) {
			return t
		}
		return Object.assign({}, t, {
			completed: !t.completed
		})
	})
}


const todos = (state: Todos = [], action: Action): Todos => {
	switch(action.type) {
		case 'ADD_TODO':
			return[
				...state,
				createTodo(action.id, action.text)
			]
			break;
		case 'TOGGLE_TODO':
			return toggleTodo(state, action.id)
			break;
		default: 
			return state
	}
}

export default todos






/*const todos = (state=[],action)=>{
	console.log(state)
	switch(action.type) {
		case 'ADD_TODO':
			return[
				...state,
				todo(undefined,action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action))
		default:
			return state
	}
}


const todo = (state, action) =>{

	switch(action.type) {
		case 'ADD_TODO':
			return{
				id: action.id,
				text: action.text,
				completed : false 
			}
			break;
		case 'TOGGLE_TODO':
		 if (state.id !== action.id) {
		 	return state
		 }
		 return{
		 	...state,
		 	completed: !state.completed
		 }
		default:
			return state
	}
}*/


// export default todos