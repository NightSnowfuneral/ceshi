import React,{Component} from 'react'
export default React.createClass({
		render(){
			console.log(this.props)
			return (
				<div>
					<h1>react</h1>
                    {this.props.children}
				</div>
			)
		}
})