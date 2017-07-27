import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Link from 'next/link'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
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
  <div className='field'>
    <div>
         {touched &&
        ((error &&
          <p className="help is-danger">
            {error}
          </p>)) || <p className='help'>&nbsp;</p> }
      <input className={ `input ${ touched && error ? 'is-danger' : '' }` } {...input} placeholder={label} type={type} />
    </div>
  </div>

const RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
  <div className="container is-fluid">
    <form onSubmit={ handleSubmit }>
      <Field name="name" type="text" component={renderField} label="Name" /> &nbsp;
      <Field name="username" type="text" component={renderField} label="Username" /> &nbsp;
      <Field name="email" type="email" component={renderField} label="Email" /> &nbsp;
      <Field name="password" type="password" component={renderField} label="Password" /> &nbsp;
      <button className="button is-success">Register</button>
    </form>
  </div>
  )
}

export default reduxForm({
  form: 'registrationForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(RegistrationForm)