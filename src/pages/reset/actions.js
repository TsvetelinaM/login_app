import { RESET_SUCCESS, RESET_FAILURE } from './constants'
import users from 'services/api/users.json'
import SnackbarUtils from 'services/snackbar/snackbar.js'

export const resetRequest = (email) => (dispatch) => {
  let user = users.find((user) => user.email === email)
  if (user) {
    SnackbarUtils.success('Successful')
    dispatch({
      type: RESET_SUCCESS,
    })
  } else {
    SnackbarUtils.error('Failure')
    dispatch({
      type: RESET_FAILURE,
    })
  }
}
