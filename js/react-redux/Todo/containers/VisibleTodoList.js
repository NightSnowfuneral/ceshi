import React from 'react'
import { connect } from 'react-redux'
import addTodoList from '../components/addTodoList'
import {toggleTodo} from '../actions'


const getVisility = (todos, filter) =>{
	switch(filter) {
		case 'SHOW_ALL':
			return todos
			break;
		case 'SHOW_COMPLETED':
			return  todos.filter(t => t.completed)
			break;
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
			break;
		default:
			return ('Unkonw filter' + filter)
	}
}

const mapStateProps = (state) => ({
	todos: getVisility(state.todos, state.visibilityFilter)
})

const mapDispatch = ({
	onTodoClick: toggleTodo
})

const Visility = connect(mapStateProps,mapDispatch)(addTodoList)

export default Visility 