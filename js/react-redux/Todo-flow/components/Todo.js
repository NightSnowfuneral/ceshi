import React, {PropTypes} from 'react'

import type {Text} from '../types'


export type Props = {
	onClick: () => void,
	completed: boolean,
	text: Text
};

const Todo = ({onClick,completed,text}: Props)=>(
		<li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
			{text}
		</li>
	)

Todo.propTypes={
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo 

