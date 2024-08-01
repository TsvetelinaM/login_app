import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { MainContainer } from 'components/containers/MainContainer'
import { Label } from 'components/form/Label'
import { Input } from 'components/form/Input'
import { Header1 } from 'components/headers/Headers'
import { SubmitBtn, BackBtn } from 'components/buttons/Buttons'
import { resetRequest } from './actions'
import { loginPath } from 'services/utils/AppVars'
import { emailKey } from './constants'

const ResetPassword = ({ translations, resetRequest }) => {
  const [formData, setFormData] = useState({ email: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    resetRequest(formData.email)
  }

  return (
    <MainContainer>
      <BackBtn to={loginPath}>{translations.back_login}</BackBtn>
      <Header1>{translations.reset_password}</Header1>
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
        <SubmitBtn>{translations.submit}</SubmitBtn>
      </form>
    </MainContainer>
  )
}

ResetPassword.propTypes = {
  translations: PropTypes.object,
  resetRequest: PropTypes.func,
}

export default connect(null, {
  resetRequest,
})(ResetPassword)
