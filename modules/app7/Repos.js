import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
	render() {
		return(

	            <div>
	            	<h1>Roestr</h1>
	            	<ul>
	            		<li><Link to="/repos/reactjs/react-router">about</Link></li>
	            		<li><Link to="/repos/facebook/react">repos</Link></li>
	            	</ul>
	            </div>		
			)
	}
})