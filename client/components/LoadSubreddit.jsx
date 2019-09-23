import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subreddit: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <div>
        <input type='text' name='subreddit'onChange={this.handleChange} placeholder='Subreddit Name'/>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
       Fetch Posts
        </button>
        {' '}
        {/* <button onClick={() => this.props.dispatch()}> */}
        {/* </button> */}
        {this.props.children}
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
