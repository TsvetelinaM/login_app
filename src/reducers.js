import { combineReducers } from 'redux-immutable'
// import i18nReducer from 'services/i18n/i18nSlice'
import { i18nReducer } from 'pages/localization/reducers'
import login from 'pages/login/reducers'
const rootReducer = combineReducers({
  i18n: i18nReducer,
  login,
})

export default rootReducer
