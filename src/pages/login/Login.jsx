import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import { MainContainer } from 'components/containers/MainContainer'
import { Label } from 'components/form/Label'
import { Input } from 'components/form/Input'
import { Header1 } from 'components/headers/Headers'
import { SubmitBtn } from 'components/buttons/Buttons'
import { Centered } from 'components/layout/Layout'
import { loginRequest } from 'pages/login/actions'
import { getIsAuthenticated } from 'pages/login/selectors'
import { homePath, resetPath } from 'services/utils/AppVars'
import { emailKey, passwordKey } from './constants'

const Login = ({ translations, loginRequest, isAuthenticated }) => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(homePath)
    }
  }, [isAuthenticated, navigate])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginRequest(formData)
  }

  return (
    <MainContainer>
      <Header1>{translations.entrance}</Header1>
      <form onSubmit={handleSubmit}>
        <Label htmlFor={emailKey}>{translations.email}</Label>
        <Input
          name={emailKey}
          type='email'
          autoComplete={emailKey}
          autoFocus
          required
          value={formData.email}
          onChange={handleChange}
        />
        <Label htmlFor={passwordKey}>{translations.password}</Label>
        <Input
          name={passwordKey}
          type='password'
          autoComplete={passwordKey}
          required
          defaultValue={formData.password}
          onChange={handleChange}
        />
        <SubmitBtn>{translations.login}</SubmitBtn>
      </form>
      <Centered>
        <Link to={resetPath}>{translations.reset_password}</Link>
      </Centered>
    </MainContainer>
  )
}

Login.propTypes = {
  translations: PropTypes.object,
  loginRequest: PropTypes.func,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps, {
  loginRequest,
})(Login)
