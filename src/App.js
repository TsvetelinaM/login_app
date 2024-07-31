import React, { useEffect } from 'react'
import { SnackbarProvider } from 'notistack'
import { useDispatch } from 'react-redux'

import AppRoutes from 'Routes'
import GlobalStyle from 'global-styles'
import { SnackbarUtilsConfigurator, stylesSnackbar } from 'services/snackbar'
import { setLangAsync } from 'services/i18n/i18nSlice'

const ALERT_TIMEOUT = 5 * 1000 // milliseconds

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    async function setLang() {
      await dispatch(setLangAsync())
    }
    setLang()
  }, [dispatch])

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
      <AppRoutes />
      <GlobalStyle />
    </SnackbarProvider>
  )
}

export default App
