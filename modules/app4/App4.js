import React,{Component} from 'react'

export default React.createClass({
	render() {
		return(
			   <div>
			   	   <h1>技术</h1>
			   	   {this.props.children}
			   </div>
			)
	}
})