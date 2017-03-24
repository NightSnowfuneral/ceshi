import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render() {
		return(
			    <div>
			        <h1>React Router</h1>
			        <ul>
			        	<li><NavLink to="/repos/reactjs/reacr-router">about</NavLink></li>
			        	<li><NavLink to="/repos/facebook/react">respon</NavLink></li>
			        </ul>
			        {this.props.children}    
			    </div>
			)
	}
})