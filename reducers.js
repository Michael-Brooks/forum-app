export default {
    user: (state = { loggedIn: false }, { type, payload }) => {
        switch (type) {
            case 'LOGIN':
                return { ...state, loggedIn: true }
            case 'LOGOUT':
                return { ...state, loggedIn: false }
            default: return state
        }
    },
    post: (state = { showPost: false }, { type, payload }) => {
        switch (type) {
            case 'REVEALPOST':
                return { ...state, showPost: true }
            case 'HIDEPOST':
                return { ...state, showPost: false }
            default: return state
        }
    }
}