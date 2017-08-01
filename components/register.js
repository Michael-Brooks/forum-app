import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postRegisterThenLogin } from '../store'
import axios from 'axios'
import RegistrationForm from './RegistrationForm'

class Register extends Component {

  registerThenLogin = (values) => {
    this.props.postRegisterThenLogin(values.name, values.username, values.email, values.password)
  }
  render() {
    const { loggedIn } = this.props.user

    if(process.browser && loggedIn) history.go(-1)
    
    return (
      <div>
        <RegistrationForm onSubmit={ this.registerThenLogin } />
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = (dispatch) => {
    return {
        postRegisterThenLogin: bindActionCreators(postRegisterThenLogin, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)