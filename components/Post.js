import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closePost } from '../store'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      message: '',
    }
  }

  onClosePost = () => {
    console.log('local closing')
    this.props.closePost();
  }
  render() {
    const { showPost } = this.props
    
    if (showPost) return (
      <div>
        <button onClick={ this.onClosePost }>Close</button>
        <div className="container is-fluid">

            <div className="field">
              <p className="control">
                <input className="input" value={ this.state.title } onChange={ event => {
                  this.setState({title: event.target.value})
                } } type="text" name="title" placeholder="Title" />
              </p>
            </div>
          
            <div className="field">
              <p className="control">
                <textarea className="input" value={ this.state.message } onChange={ event => {
                  this.setState({message: event.target.value})
                } } style={{ height: '250px' }} name="message" placeholder="Message" />
              </p>
            </div>

            <button className="button is-success">Create Post</button>
        </div>
      </div>
    )

    return (
      <div></div>
    )
  }
}

const mapStateToProps = ({ showPost }) => ({ showPost })

const mapDispatchToProps = (dispatch) => {
    return {
      closePost: bindActionCreators(closePost, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)