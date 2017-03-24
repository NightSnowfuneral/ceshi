import React,{Component} from 'react'
import {Link} from 'react-router'

export default React.createClass({
	render() {
		return(
			   <div>
			   		<h1>React Rouer totial</h1>
			   		<ul role="nav">
			   			<li><Link to='/about' >about</Link></li>
			   			<li><Link to='/repos' >epos</Link>r</li>
			   			
			   		</ul>
			   		{this.props.children}
			   </div>
			)
	}
})