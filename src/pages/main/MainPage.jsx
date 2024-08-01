import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { BackgroundHolder } from 'components/containers/BackgroundHolder.jsx'
import LangSwitcher from 'pages/localization/LangSwitcher'
import SnackbarUtils from 'services/snackbar/snackbar'
import { getErrorMsg, getSuccessMsg } from 'pages/main/selectors'
import { clearMessages } from 'pages/main/actions'

const MainPage = ({
  children,
  errorMsg,
  clearMessages,
  translations,
  successMsg,
}) => {
  useEffect(() => {
    if (errorMsg) {
      SnackbarUtils.error(translations.errorMsgs[errorMsg])
    }
    if (successMsg) {
      SnackbarUtils.success(translations[successMsg])
    }
    clearMessages()
  }, [errorMsg, translations, clearMessages, successMsg])

  return (
    <>
      <BackgroundHolder />
      <LangSwitcher />
      {children}
    </>
  )
}

MainPage.propTypes = {
  translations: PropTypes.object,
  children: PropTypes.element,
  errorMsg: PropTypes.string,
  clearMessages: PropTypes.func,
  successMsg: PropTypes.string,
}
const mapStateToProps = (state) => ({
  errorMsg: getErrorMsg(state),
  successMsg: getSuccessMsg(state),
})

export default connect(mapStateToProps, {
  clearMessages,
})(MainPage)
