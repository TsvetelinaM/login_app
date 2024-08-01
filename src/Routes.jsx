import React from 'react'
import { Routes, Route } from 'react-router-dom'

import GuardedRoute from 'GuardedRoute.jsx'
import LoginPage from 'pages/login/LoginPage'
import ResetPasswordPage from 'pages/reset/ResetPasswordPage'
import HomePage from 'pages/home/HomePage'
import NotFoundPage from 'pages/notFound/NotFoundPage'
import * as constants from 'services/utils/appVars'

const AppRoutes = (props) => (
  <Routes>
    <Route path={constants.initialPath} element={<LoginPage {...props} />} />
    <Route path={constants.loginPath} element={<LoginPage {...props} />} />
    <Route
      path={constants.resetPath}
      element={<ResetPasswordPage {...props} />}
    />
    <Route element={<GuardedRoute />}>
      <Route path={constants.homePath} element={<HomePage {...props} />} />
    </Route>
    <Route path='*' element={<NotFoundPage {...props} />} />
  </Routes>
)

export default AppRoutes
