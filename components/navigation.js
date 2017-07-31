import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Link from 'next/link'
import { postUserLogin, logUserOut, displayPost } from '../store'
import LoginForm from './LoginForm'

class Navigation extends Component {
    login = (values) => {
        this.props.postUserLogin(values.username, values.password)
    }

    logout = () => {
        this.props.logUserOut()
    }

    post = () => {
        this.props.displayPost()
    }
    
    renderNavigation() {
        if(this.props.loggedIn === true)
            return (
            <div className="navbar-end">
                <div className="navbar-item">
                    <button className="button is-success" onClick={ this.post }>New Post</button>
                </div>
                <div className="navbar-item">
                    <button className="button is-info" onClick={ this.logout }>Logout</button>
                </div>
            </div>
        )

        return (
            <div className="navbar-end">
                <LoginForm onSubmit={ this.login } />
            </div>
        )
    }

    render () {
        const { loggedIn, showPost } = this.props

        return (
            <div>
                <nav className="navbar ">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="navbar-item">Forum</a>
                        </Link> 

                    <div className="navbar-burger burger" data-target="navMenuExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>

                    <div id="navMenuExample" className="navbar-menu">
                      { this.renderNavigation() }  
                    </div>
                </nav>
            </div>
        )
    }

    
}

const mapStateToProps = ({ loggedIn, showPost }) => ({ loggedIn, showPost })

const mapDispatchToProps = (dispatch) => {
    return {
        postUserLogin: bindActionCreators(postUserLogin, dispatch),
        logUserOut: bindActionCreators(logUserOut, dispatch),
        displayPost: bindActionCreators(displayPost, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)