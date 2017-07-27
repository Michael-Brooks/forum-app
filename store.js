import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import axios from 'axios'

const createInitialState = {
    loggedIn: false,
    showPost: false,
}

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REVEALPOST: 'REVEALPOST',
    HIDEPOST: 'HIDEPOST'
}

// REDUCERS
export const initialReducer = (state = createInitialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return Object.assign({}, state, { loggedIn: true })
        case actionTypes.LOGOUT:
            return Object.assign({}, state, { loggedIn: false })
        case actionTypes.REVEALPOST:
            return Object.assign({}, state, { showPost: true })
        case actionTypes.HIDEPOST:
            return Object.assign({}, state, { showPost: false })
        default: return state
    }
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
            return dispatch({ type: actionTypes.LOGIN })
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
        return dispatch({ type: actionTypes.LOGIN })
    })
    .catch(function (error) {
        console.log('error', error)
    })
}

export const logUserIn = () => dispatch => {
    return dispatch({ type: actionTypes.LOGIN })
}

export const logUserOut = () => dispatch => {
    localStorage.removeItem('token')
    return dispatch({ type: actionTypes.LOGOUT })
}

export const displayPost = () => dispatch => {
    return dispatch({ type: actionTypes.REVEALPOST })
}

export const closePost = () => dispatch => {
    return dispatch({ type: actionTypes.HIDEPOST })
}

const rootReducer = combineReducers({
    initialReducer,
    form: formReducer
})

export const initStore = (initialState = createInitialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
}