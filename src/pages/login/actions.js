import { LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'
import users from 'services/api/users.json'

export const loginRequest = (credentials) => (dispatch) => {
  let user = users.find(
    (user) =>
      user.email === credentials.email && user.password === credentials.password
  )
  if (user) {
    dispatch({
      type: LOGIN_SUCCESS,
      user: user,
    })
  } else {
    dispatch({
      type: LOGIN_FAILURE,
      msg: 'wrong_credentials',
    })
  }
}
