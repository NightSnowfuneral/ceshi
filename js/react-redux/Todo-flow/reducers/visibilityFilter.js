import type { VisibilityFilter, Action} from '../type'

const visibilityFilter = (state: VisibilityFilter = 'SHOW_ALL', action:Action): VisibilityFilter =>{

	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
			break;
		default:
			return state
	}
}


export default visibilityFilter