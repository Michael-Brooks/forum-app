import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Link from 'next/link'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <div className='field'>
      <input className={ `input ${ touched && error ? 'is-danger' : '' }` } {...input} placeholder={label} type={type} />
    </div>
  </div>

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
  <div className="navbar-item">
    <form className="navbar-item" onSubmit={handleSubmit}>
      <Field name="username" type="text" component={renderField} label="Username" /> &nbsp;
      <Field name="password" type="password" component={renderField} label="Password" /> &nbsp;
      <button className="button is-success">Login</button>
    </form>
    <div className="navbar-item"><Link href="/register"><a className="button is-info">Register</a></Link></div>
  </div>
  )
}

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(LoginForm)