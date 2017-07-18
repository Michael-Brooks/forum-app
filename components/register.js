import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      username: '',
      password: '',
      email: '',
    }

    this.test = this.test.bind(this)
  }

  test() {
    // this.props.handleLoginState(true)
  }

  postRegistration = () => {
    axios.post('http://localhost:1337/user', {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
        .then(function (response) {
          localStorage.setItem('token', response.data.token)
          // this.props.handleLoginState(true)
        }.bind(this))
        .catch(function (error) {
            console.log('error', error.response)
        })
  }

  render = () => (
    <div>
      <div className="container is-fluid">
        
          <div className="field">
            <p className="control">
              <input className="input" value={ this.state.name } onChange={ event => {
                this.setState({name: event.target.value})
              } } type="text" name="name" placeholder="Name" />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <input className="input" value={ this.state.username } onChange={ event => {
                this.setState({username: event.target.value})
              } } type="text" required name="username" placeholder="Username" />
            </p>
          </div>

          <div className="field">
            <p>
              <input className="input" value={ this.state.email } onChange={ event => {
                this.setState({email: event.target.value})
              } } type="email" required name="email" placeholder="Email" />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <input className="input" value={ this.state.password } onChange={ event => {
                this.setState({password: event.target.value})
              } } type="password" required name="password" placeholder="Password" />
            </p>
          </div>
          <button className="button is-success" onClick={ this.test }>Register</button>
        
      </div>
    </div>
  )

}

export default Register