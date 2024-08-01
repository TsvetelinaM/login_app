import { RESET_SUCCESS, RESET_FAILURE } from './constants'
import users from 'services/api/users.json'

export const resetRequest = (email) => (dispatch) => {
  let user = users.find((user) => user.email === email)
  if (user) {
    dispatch({
      type: RESET_SUCCESS,
      msg: 'sent_password',
    })
  } else {
    dispatch({
      type: RESET_FAILURE,
      msg: 'try_again',
    })
  }
}
