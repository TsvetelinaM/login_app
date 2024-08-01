import { combineReducers } from 'redux-immutable'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true
    case LOGIN_FAILURE:
      return false
    default:
      return state
  }
}

const authUserInfo = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user
    case LOGIN_FAILURE:
      return {}
    default:
      return state
  }
}

export default combineReducers({ isAuthenticated, authUserInfo })
