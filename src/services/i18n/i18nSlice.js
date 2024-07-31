import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { defaultLang, supportedLangs } from './i18nConfig'
import { fetchTranslations } from './i18nAPI'

const initialState = {
  status: 'loading',
  lang: defaultLang, // "en" when app loads
  supportedLangs: { ...supportedLangs },
  // We'll keep our translations in Redux to start.
  // Later on we'll move them to their own files so
  // that they're easier to manage.
  translations: {},
}

export const setLangAsync = createAsyncThunk(
  'i18n/setLangAsync',

  async (lang, { getState, dispatch }) => {
    // Default to active locale if none is given.
    console.log('setLangAsync')

    const resolvedLang = lang || getState().get('i18n').lang
    console.log('resolvedLang', resolvedLang)
    const translations = await fetchTranslations(resolvedLang)

    dispatch(i18nSlice.actions.setLang(resolvedLang))

    return translations
  }
)

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
    },
  },
  extraReducers: (builder) => {
    console.log('extraReducers 1')

    builder.addCase(setLangAsync.pending, (state) => {
      console.log('setLangAsync.pending', state)
      state.status = 'loading'
    })
    console.log('extraReducers 2', setLangAsync)

    builder.addCase(
      setLangAsync.fulfilled,

      (state, action) => {
        console.log('setLangAsync.fulfilled')
        state.translations = action.payload

        state.status = 'idle'
      }
    )
  },
})

export const { setLang } = i18nSlice.actions

export const selectTranslations = (state) => {
  console.log(state.get('i18n'))
  return state.get('i18n').translations
}

export default i18nSlice.reducer
