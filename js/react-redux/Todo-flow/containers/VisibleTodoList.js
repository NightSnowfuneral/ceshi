import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import type { State, Dispatch } from '../types'
import type { Connector } from 'react-redux'
import type { Props } from '../components/TodoList'



const getVisibleTodos = (todos, filter) =>{
	switch(filter) {
		case 'SHOW_ALL':
			return todos
			break;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
			break;
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
			break;
		default:
			throw new Error('UnKnown filter：' + filter )
	}
}


const mapStateToProps = (state: State) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

const connector: Connector<{}, Props> = connect(
		mapStateToProps,
		mapDispatchToProps
	)


export default connector(TodoList)