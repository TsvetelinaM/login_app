import { createSlice } from '@reduxjs/toolkit'
import { SET_LANG } from './constants'
import { defaultLang, supportedLangs } from 'services/i18n/i18nConfig'
import { setLangAsync } from 'pages/localization/actions'

const initialState = {
  status: 'loading',
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {},
}

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLang: (state, action) => {
      if (action.type === SET_LANG) {
        state.lang = action.lang
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLangAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(setLangAsync.fulfilled, (state, action) => {
        state.translations = action.payload
        state.status = 'idle'
      })
  },
})

export const i18nReducer = i18nSlice.reducer
