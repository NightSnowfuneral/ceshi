import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo}) => (
		<p>
			<button onClick = {onUndo} disabled = {!canUndo}>
				Undo
			</button>
			<button onClick = {onRedo} disabled = {!canRedo}>
				Redo
			</button>
		</p>
	)
// 判断是否启动撤销和重做编写
const mapStateToProps = (state) => ({
	/*看action的动作，是否要移除最后一个元素*/
	canUndo: state.todos.past.length > 0,
	/*添加action的动作，是否要添加past的前面*/
	canRedo: state.todos.future.length > 0
})

/*插件自动判断action的变化，然后判断是否添加动作*/
const mapDispatchToProps = ({
	onUndo: UndoActionCreators.undo,
	onRedo: UndoActionCreators.redo
})


UndoRedo = connect(mapStateToProps,
				   mapDispatchToProps
	)(UndoRedo)

export default UndoRedo