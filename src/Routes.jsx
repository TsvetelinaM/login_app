import React from 'react'
import { Routes, Route } from 'react-router-dom'

import GuardedRoute from 'GuardedRoute.jsx'
import Login from 'pages/login/Login'
import ResetPassword from 'pages/reset/ResetPassword'
import Home from 'pages/home/Home'
import NotFound from 'pages/notFound/NotFound'
import * as constants from 'services/utils/AppVars'

const AppRoutes = (props) => (
  <Routes>
    <Route path={constants.initialPath} element={<Login {...props} />} />
    <Route path={constants.loginPath} element={<Login {...props} />} />
    <Route path={constants.resetPath} element={<ResetPassword {...props} />} />
    <Route element={<GuardedRoute />}>
      <Route path={constants.homePath} element={<Home {...props} />} />
    </Route>
    <Route path='*' element={<NotFound {...props} />} />
  </Routes>
)

export default AppRoutes
