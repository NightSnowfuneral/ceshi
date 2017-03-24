import React from 'react'
import NavLink from './NavLink'


export default React.createClass({
	contextTypes:{
		router:React.PropTypes.object
	},

	handlerSubmit(event){
		event.preventDefault()
		const userName = event.target.elements[0].value
		const repos = event.target.elements[1].value
		const path = `/repos/${userName}/${repos}`
		this.context.router.push(path)
		console.log(path)
	},
	render(){
		return(
			    <div>
			    	<h1>React Router</h1>
			    	<ul>
			    	    <li ><NavLink to="/" onlyActiveOnIndex>home</NavLink></li>
			    	    <li ><NavLink to="/repos/reactjs/react-router">react-router</NavLink></li>
			    	    <li ><NavLink to="/repos/facebook/react">react</NavLink></li>
			    	    <li>
			    	    	<form onSubmit={this.handlerSubmit}>
				    	    	<input type="text" placeholder="userName" />
				    	    	{''} / {''}
				    	    	<input type="text" placeholder="repos" />
				    	    	{''}
				    	    	<button type="submit"> go </button>
			    	    	</form>
			    	    </li>
			    	</ul>
			    	{this.props.children}
			    </div>
			)
	}
})