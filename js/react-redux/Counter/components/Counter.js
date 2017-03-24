import React,{Component} from 'react'

class Count extends Component{
	odd =() =>{
		if (this.props.value % 2 !==0) {
			this.props.onIcrement()
		}
	}
	anys =() =>{
		setTimeout(this.props.onIcrement,1000)

	}
	render(){
		const {value,onIcrement,onDecement} = this.props
		return(
				<p>
					{value}
					<button  onClick={onIcrement}>
						+
					</button>
					<button onClick={onDecement} >
						-
					</button>
					<button onClick={this.odd}>
					odd
					</button>
					<button onClick={this.anys}>
                          dddd
					</button>
				</p>
			)
	}
}


export default Count