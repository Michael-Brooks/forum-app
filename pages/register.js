import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { initStore, logUserIn, logUserOut } from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/Layout'
import Register from '../components/Register'

const config = require('../config.json')

class Forum extends Component {
  static getInitialProp ({ store }) {
    store.dispatch(logUserIn())
    store.dispatch(logUserOut())
  }

  render () {
    return (
      <Layout title="Register now">
        <Register />
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: bindActionCreators(logUserIn, dispatch),
    logUserOut: bindActionCreators(logUserOut, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Forum)