import { createSelector } from 'reselect'

const selectTranslations = (state) => state.getIn(['i18n'])

export const getSelectedTranslations = createSelector(
  [selectTranslations],
  (selectTranslations) => selectTranslations.translations
)

export const getSelectedLang = createSelector(
  [selectTranslations],
  (selectTranslations) => selectTranslations.lang
)

export const getSupportedLangs = createSelector(
  [selectTranslations],
  (selectTranslations) => selectTranslations.supportedLangs
)
