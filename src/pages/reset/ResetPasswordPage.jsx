import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { MainContainer } from 'components/containers/MainContainer'
import { Label, ErrorMsg } from 'components/form/Label'
import { Input } from 'components/form/Input'
import { Header1 } from 'components/headers/Headers'
import { SubmitBtn, BackBtn } from 'components/buttons/Buttons'
import { resetRequest } from './actions'
import { loginPath } from 'services/utils/appVars'
import { checkEmail } from 'services/validations/validations'
import { emailKey } from './constants'

const ResetPasswordPage = ({ translations, resetRequest }) => {
  const [formData, setFormData] = useState({ email: '' })

  const handleChange = (event) => {
    const { value } = event.target
    setFormData({ email: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    resetRequest(formData.email)
  }
  const isValidEmail = (email) => {
    //checking if there is an entered data that is not a valid email format
    if (email.length > 0 && !checkEmail(formData.email)) {
      return false
    }
    return true
  }

  return (
    <MainContainer>
      <BackBtn to={loginPath}>{translations.back_login}</BackBtn>
      <Header1>{translations.reset_password}</Header1>
      <form onSubmit={handleSubmit}>
        <Label htmlFor={emailKey}>{translations.email}</Label>
        <Input
          name={emailKey}
          type='text'
          autoComplete={emailKey}
          autoFocus
          required
          value={formData.email}
          onChange={handleChange}
        />
        {!isValidEmail(formData.email) && translations.errorMsgs && (
          <ErrorMsg>{translations.errorMsgs['invalid_email']}</ErrorMsg>
        )}
        <SubmitBtn disabled={!checkEmail(formData.email)}>
          {translations.submit}
        </SubmitBtn>
      </form>
    </MainContainer>
  )
}

ResetPasswordPage.propTypes = {
  translations: PropTypes.object,
  resetRequest: PropTypes.func,
}

export default connect(null, {
  resetRequest,
})(ResetPasswordPage)
