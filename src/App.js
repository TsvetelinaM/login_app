import React, { useEffect } from 'react'
import { SnackbarProvider } from 'notistack'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import AppRoutes from 'Routes'
import GlobalStyle from 'global-styles'
import {
  SnackbarUtilsConfigurator,
  stylesSnackbar,
} from 'services/snackbar/snackbar'
import MainPage from 'pages/main/MainPage'
import { setLangAsync } from 'pages/localization/actions'
import { getSelectedTranslations } from 'pages/localization/selectors'

const ALERT_TIMEOUT = 5 * 1000 // milliseconds

function App({ setLangAsync, translations }) {
  useEffect(() => {
    setLangAsync()
  }, [setLangAsync])

  return (
    <SnackbarProvider
      maxSnack={1}
      autoHideDuration={ALERT_TIMEOUT}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      classes={{
        root: stylesSnackbar.snackBarBase,
      }}
    >
      <SnackbarUtilsConfigurator />
      <MainPage translations={translations}>
        <AppRoutes translations={translations} />
      </MainPage>
      <GlobalStyle />
    </SnackbarProvider>
  )
}

App.propTypes = {
  translations: PropTypes.object,
}

const mapStateToProps = (state) => ({
  translations: getSelectedTranslations(state),
})

export default connect(mapStateToProps, {
  setLangAsync,
})(App)
