import React, {PropTypes} from 'react'
import Todo from './Todo'


const addTodoList = ({todos, onTodoClick}) =>{
	console.log(onTodoClick)
	return(
			<ul>
				{todos.map(todo =>
					<Todo key={todo.id} {...todo} onClick={() =>onTodoClick(todo.id)} /> 
					)} 
			</ul>
		)
}
//PropTypes.arrayOf某种类型的阵列（字符类型）

//React.PropTypes.shape 是否符合指定格式的物件
addTodoList.proTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool
	}).isRequired).isRequired,

	onTodoClick: PropTypes.func.isRequired
}

export default addTodoList 