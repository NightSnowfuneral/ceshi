import { connect } from 'react-redux'
import {setvisibilityfilter} from '../actions'
import Link from '../components/Link'


const mapsta = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
}) 

const mapstate = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setvisibilityfilter(ownProps.filter))
	}
})


const FilterLink = connect(mapsta, mapstate)(Link)


export default FilterLink