import React from 'react'
import { useSelector } from 'react-redux'

import { selectTranslations } from 'services/i18n/i18nSlice'
import { LangSwitcher } from 'components/localization/LangSwitcher'

const Initial = () => {
  const t = useSelector(selectTranslations)
  console.log(t)
  return (
    <>
      <LangSwitcher />
      <div>{t.tagline}</div>
    </>
  )
}

Initial.propTypes = {}

export default Initial
