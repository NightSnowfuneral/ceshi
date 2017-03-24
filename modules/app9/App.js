import React from 'react'
import NavLink from './NavLink'
import {IndexRoute} from 'react-router'

export default React.createClass({
        render() {
                return(
                            <div>
                                <h1>React Router Tutoial</h1>
                                <ul>
                                     <li><NavLink to="/about">about</NavLink></li>
                                     <li><NavLink to="/repos">repos</NavLink></li> 
                                </ul>
                                {this.props.children}
                            </div>
                        )
        }
})