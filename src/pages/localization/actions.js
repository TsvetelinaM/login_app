import { createAsyncThunk } from '@reduxjs/toolkit'
import { SET_LANG, SET_LANG_ASYNC } from './constants'
import { fetchTranslations } from 'services/i18n/i18nAPI'

export const setLangAsync = createAsyncThunk(
  SET_LANG_ASYNC,
  async (lang, { getState, dispatch }) => {
    // Default to active locale if none is given.
    const resolvedLang = lang || getState().get('i18n').lang
    const translations = await fetchTranslations(resolvedLang)
    dispatch(setLang(resolvedLang))

    return translations
  }
)

export const setLang = (lang) => (dispatch) => {
  dispatch({
    type: SET_LANG,
    lang,
  })
}
