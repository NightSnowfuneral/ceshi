import React,{Component} from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render() {
		return(
			    <div>
			    	<h1>React Router totail</h1>
			    	<ul>
			    		<li><NavLink to="/about">aboutf</NavLink></li>
			    		<li><NavLink to="/repos">repos</NavLink></li>
			    	</ul>
			    	{this.props.children}
			    </div>
			)
	}
})