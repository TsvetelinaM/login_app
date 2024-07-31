import { langUrl } from './i18nConfig'

export function fetchTranslations(lang) {
  console.log('fetchTranslations', lang)
  return new Promise((resolve) => {
    fetch(langUrl.replace('{lang}', lang))
      .then((response) => response.json())
      .then((data) => resolve(data))
  })
}
