import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { setLangAsync } from 'pages/localization/actions'
import {
  getSelectedLang,
  getSupportedLangs,
} from 'pages/localization/selectors'
import { SelectHolder } from 'components/dropdowns/dropdowns'
import Select from 'react-select'

const LangSwitcher = ({ selectedLang, setLangAsync, supportedLangs }) => {
  const changeLanguage = (e) => setLangAsync(e.value)
  const getOptions = (supportedLangs) =>
    Object.entries(supportedLangs).map(([code, name]) => ({
      value: code,
      label: name,
    }))
  const getDefaultValue = (selectedLang, supportedLangs) => {
    const currentLang = supportedLangs[selectedLang]
    return {
      value: selectedLang,
      label: currentLang ?? selectedLang,
    }
  }
  return (
    <SelectHolder>
      <Select
        options={getOptions(supportedLangs)}
        defaultValue={getDefaultValue(selectedLang, supportedLangs)}
        onChange={changeLanguage}
      />
    </SelectHolder>
  )
}

LangSwitcher.propTypes = {
  selectedLang: PropTypes.string,
  setLangAsync: PropTypes.func,
  supportedLangs: PropTypes.object,
}

const mapStateToProps = (state) => ({
  selectedLang: getSelectedLang(state),
  supportedLangs: getSupportedLangs(state),
})

export default connect(mapStateToProps, {
  setLangAsync,
})(LangSwitcher)
