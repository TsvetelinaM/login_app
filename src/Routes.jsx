import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Initial from 'pages/login/Initial'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Initial />} />
    </Routes>
  )
}

export default AppRoutes
