import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import axios from 'axios'
import reducers from './reducers'

let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const postRegisterThenLogin = (name, username, email, password) => dispatch => {
    axios.post('http://localhost:1337/user', {
        name: name,
        username: username,
        email: email,
        password: password,
        })
        .then(function (response) {
            localStorage.setItem('token', response.data.token)
            return dispatch({ type: 'LOGIN' })
        })
        .catch(function (error) {
            console.log('error', error.response)
        })
  }

export const postUserLogin = (username, password) => dispatch => {
    axios.post('http://localhost:1337/auth', {
        username: username,
        password: password,
    })
    .then(function (response) {
        localStorage.setItem('token', response.data.token)
        return dispatch({ type: 'LOGIN' })
    })
    .catch(function (error) {
        console.log('error', error)
    })
}

export const logUserIn = () => dispatch => {
    return dispatch({ type: 'LOGIN' })
}

export const logUserOut = () => dispatch => {
    localStorage.removeItem('token')
    return dispatch({ type: 'LOGOUT' })
}

export const displayPost = () => dispatch => {
    return dispatch({ type: 'REVEALPOST' })
}

export const closePost = () => dispatch => {
    return dispatch({ type: 'HIDEPOST' })
}

const rootReducer = combineReducers({
    ...reducers,
    form: formReducer
})

export const initStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), devtools))
}