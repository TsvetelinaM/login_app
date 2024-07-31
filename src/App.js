import React from 'react'
import { SnackbarProvider } from 'notistack'

import AppRoutes from 'Routes'
import GlobalStyle from 'global-styles'
import { SnackbarUtilsConfigurator, stylesSnackbar } from 'services/snackbar'

const ALERT_TIMEOUT = 5 * 1000 // milliseconds

function App() {
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
