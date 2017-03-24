import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
  static propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {  //render执行之后，再执行这个生命周期
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))  //初始值是reactjs

  }

  componentWillReceiveProps(nextProps) {   
  //任何时候，当组件的props属性被修改时(通过父件或组件引用), 组件的componentWillReceiveProps方法都会被调用，这时
  //我们就获得了修改props对象和更新state的机会
  //state改变但是this.props.selectedReddit还未改变。就再次调用
 
    if (nextProps.selectedReddit !== this.props.selectedReddit) {   //没有这个下拉框数据不会被显示
      const { dispatch, selectedReddit } = nextProps   
           dispatch(fetchPostsIfNeeded(selectedReddit))
    }

  }

  handleChange = nextReddit => {
    this.props.dispatch(selectReddit(nextReddit))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedReddit } = this.props
    
    dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded(selectedReddit))


  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated, didInvalidate } = this.props
    console.log(selectedReddit)
    console.log(isFetching)
    console.log(didInvalidate)

    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker 
                value={selectedReddit}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedReddit, postsByReddit } = state

  const {
    isFetching,
    lastUpdated,
    items: posts,
    didInvalidate
  } = postsByReddit[selectedReddit] || {  
    isFetching: true,
    items: []

  }

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated,
    didInvalidate
  }
}

export default connect(mapStateToProps)(App)