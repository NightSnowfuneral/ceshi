import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import Counter from './components/Counter'
import reducers from './reducers'
import {createStore} from 'redux'

const store = createStore(reducers)


class App extends Component{
	render(){
		return(
				<Counter value={store.getState()}
					onIcrement={() => store.dispatch({ type: 'INCREMENT'})}
					onDecement={() => store.dispatch({ type: 'DECREMENT'})}
				/>
			)
	}
}

const Renders = () => render(
		<App />,document.getElementById('app')
	)


Renders()


store.subscribe(Renders)
