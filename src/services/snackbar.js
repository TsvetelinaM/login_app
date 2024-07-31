import { useSnackbar } from 'notistack'
import * as React from 'react'

export const stylesSnackbar = {
  snackBarBase: {
    fontSize: '1.0em',
    verticalAlign: 'center',
    lineHeight: '2em',
  },
}

const InnerSnackbarUtilsConfigurator = (props) => {
  props.setUseSnackbarRef(useSnackbar())
  return null
}

let useSnackbarRef
const setUseSnackbarRef = (useSnackbarRefProp) => {
  useSnackbarRef = useSnackbarRefProp
}

export const SnackbarUtilsConfigurator = () => {
  return (
    <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
  )
}

const SnackbarUtils = {
  success(msg) {
    this.toast(msg, 'success')
  },
  warning(msg) {
    this.toast(msg, 'warning')
  },
  info(msg) {
    this.toast(msg, 'info')
  },
  error(msg) {
    this.toast(msg, 'error')
  },
  toast(msg, variant = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant,
      style: { whiteSpace: 'pre-line' },
    })
  },
}

export default SnackbarUtils
