import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { initStore, logUserIn, logUserOut, displayPost, closePost } from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/Layout'

const config = require('../config.json')

class Forum extends Component {
  static getInitialProp ({ store }) {
    store.dispatch(logUserIn())
    store.dispatch(logUserOut())
    store.dispatch(displayPost())
    store.dispatch(closePost())
  }

  render () {
    return (
      <Layout>
        <h2>List of posts will display here.</h2>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: bindActionCreators(logUserIn, dispatch),
    logUserOut: bindActionCreators(logUserOut, dispatch),
    displayPost: bindActionCreators(displayPost, dispatch),
    closePost: bindActionCreators(closePost, dispatch),
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Forum)