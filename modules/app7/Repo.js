import React from 'react'

export default React.createClass({
	render(){
		return(
               <div>
                   <h2>{this.props.param.repoName}</h2>
               </div>			
			)
	}
})