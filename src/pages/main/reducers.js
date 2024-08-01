import { combineReducers } from 'redux-immutable'
import { CLEAR_MESSAGES } from './constants'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from 'pages/login/constants'
import { RESET_SUCCESS, RESET_FAILURE } from 'pages/reset/constants'

const errorMsg = (state = '', action) => {
  switch (action.type) {
    case CLEAR_MESSAGES:
    case LOGIN_SUCCESS:
      return ''
    case LOGIN_FAILURE:
    case RESET_FAILURE:
      return action.msg
    default:
      return state
  }
}

const successMsg = (state = '', action) => {
  switch (action.type) {
    case CLEAR_MESSAGES:
    case RESET_FAILURE:
    case LOGIN_FAILURE:
      return ''
    case RESET_SUCCESS:
      return action.msg
    default:
      return state
  }
}

export default combineReducers({ errorMsg, successMsg })
