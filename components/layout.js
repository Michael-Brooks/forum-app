import Header from './header'
import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navigation from './navigation'
import stylesheet from 'styles/main.scss'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  margin: '0 10px 0 0'
}

class Layout extends Component {
  constructor(props) {
    super(props)

    const checkLogin = (process.browser) ? localStorage.getItem('token') : false

    this.state = {
      isLoggedIn: checkLogin ? true : false
    }

    this.handleLoginState = this.handleLoginState.bind(this)
  }

  handleLoginState(data) {
    this.setState({ isLoggedIn: data })
  }


  render() {
    const { children, title = 'This is the default title', test = 'test' } = this.props

    return (
      <div style={{ marginBottom: 20 }}>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <header>
          <Navigation isLoggedIn={ this.state.isLoggedIn } handleLoginState={ this.handleLoginState } />
        </header>

        { children }

      </div>
    )
  }
}

export default Layout