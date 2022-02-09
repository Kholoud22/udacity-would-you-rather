import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import questions from './questions'
import users from './users'
import authedUser from './authed-user'

const rootReducer = combineReducers({
    questions,
    users,
    authedUser,
    loadingBar: loadingBarReducer,
})

export default rootReducer
