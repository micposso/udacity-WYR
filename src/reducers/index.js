import { combineReducers } from  'redux'
import usersReducer from './usersReducer'
import questionsReducer from './questionsReducer'
import authedUsersReducer from './authedUsersReducer'

export default combineReducers({
  usersReducer,
  questionsReducer,
  authedUsersReducer
})

