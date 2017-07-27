import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navigation from './Navigation'
import stylesheet from 'styles/main.scss'
import Post from './Post'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  margin: '0 10px 0 0'
}

export default connect(state => state)(({ children, title = 'Default title' }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <Navigation />

      { children }

      <Post />

    </div>
  )
})