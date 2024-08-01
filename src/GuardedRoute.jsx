import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

import { getIsAuthenticated } from 'pages/login/selectors'
import * as constants from 'services/utils/AppVars'

const GuardedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={constants.loginPath} />
}

GuardedRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(GuardedRoute)
