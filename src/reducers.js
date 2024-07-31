import { combineReducers } from 'redux-immutable'
import i18nReducer from 'services/i18n/i18nSlice'

const rootReducer = combineReducers({
  i18n: i18nReducer,
})

export default rootReducer
