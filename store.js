import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import axios from 'axios'
import reducers, { createInitialState } from './reducers'

let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

function postLogin(username, password){
    axios.post('http://localhost:1337/auth', {
        username: username,
        password: password,
    })
    .then(function (response) {
        localStorage.setItem('token', response.data.token)
    })
    .catch(function (error) {
        console.log('error', error.response)
    })
}

function postRegister(name, username, email, password) {
    axios.post('http://localhost:1337/user', {
        name: name,
        username: username,
        email: email,
        password: password,
    })
    .then(function (response) {
        localStorage.setItem('token', response.data.token)
    })
    .catch(function (error) {
        console.log('error', error.response)
    })
}

function postJWT() {
    const jwt = localStorage.getItem('token')
    axios.post('/auth', {
        token: jwt
    }).then(function (response) {
        return true
    }).catch(function (error) {
        console.log('error', error.response)
    })
}

export const postRegisterThenLogin = (name, username, email, password) => dispatch => {
    axios.all([postRegister(name, username, email, password), postJWT()])
    .then(function (response) {
        return dispatch({ type: 'LOGIN' })
    })
}

export const postUserLogin = (username, password) => dispatch => {
    axios.all([postLogin(username, password), postJWT()])
    .then(function (response) {
        return dispatch({ type: 'LOGIN' })
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

export const initStore = initialState => {
    return createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware), devtools))
}