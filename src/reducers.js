import { combineReducers } from 'redux-immutable'
import { i18nReducer } from 'pages/localization/reducers'
import login from 'pages/login/reducers'
import main from 'pages/main/reducers'

const rootReducer = combineReducers({
  i18n: i18nReducer,
  main,
  login,
})

export default rootReducer
