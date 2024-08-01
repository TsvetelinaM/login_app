import { LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'
import users from 'services/api/users.json'
import SnackbarUtils from 'services/snackbar/snackbar.js'

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
    SnackbarUtils.error('Failure')
    dispatch({
      type: LOGIN_FAILURE,
    })
  }
}
