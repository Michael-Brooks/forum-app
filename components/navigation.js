import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoggedIn: this.props.isLoggedIn
        }

        this.postLogout = this.postLogout.bind(this)
    }
    
    renderNavigation() {
        if(this.props.isLoggedIn === true)
            return (
            <div className="navbar-end">
                <div className="navbar-item">
                    <button className="button is-success" onClick={ this.postLogout }>Logout</button>
                </div>
            </div>
        )

        return (
            <div className="navbar-end">
                <div className="navbar-item">
                    <input className="input" value={ this.state.username } onChange={ event => {
                        this.setState({ username: event.target.value })
                    } } type="text" placeholder="Username" /> &nbsp;
                    <input className="input" value={ this.state.password } onChange={ event => {
                        this.setState({ password: event.target.value })
                    } } type="password" placeholder="Password" /> &nbsp;
                    <button className="button is-success" onClick={ this.postLogin }>Login</button>
                </div>
                <div className="navbar-item"><Link href="/register"><a className="button is-info">Register</a></Link></div>
            </div>
        )
    }

    postLogout() {
        localStorage.removeItem('token')
        this.props.handleLoginState(false)
        console.log('props', this.props.isLoggedIn)
        console.log('state', this.state.isLoggedIn)
    }

    postLogin = () => {
        axios.post('http://localhost:1337/auth', {
            username: this.state.username,
            password: this.state.password,
        })
        .then(function (response) {
            localStorage.setItem('token', response.data.token)
            this.props.handleLoginState(true)
            console.log('props', this.props.isLoggedIn)
            console.log('state', this.state.isLoggedIn)
        }.bind(this))
        .catch(function (error) {
            console.log('error', error.response)
        })
    }

    render = () => (
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

export default Navigation