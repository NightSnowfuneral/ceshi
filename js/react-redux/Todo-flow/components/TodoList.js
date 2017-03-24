import React, {PropTypes} from 'react'
import Todo from './Todo'
import type { Todos, Id } from '../types'

export type Props = {
	todos: Todos,
	onTodoClick: (id: Id) =>void
}
const TodoList = ({todos,onTodoClick}: Props) =>(
		<ul>
			{todos.map(todo=>(
					<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
				))}
		</ul>
	)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList