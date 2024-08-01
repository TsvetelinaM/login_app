import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { MainContainer } from 'components/containers/MainContainer'
import { Header1, Header2 } from 'components/headers/Headers'
import { getAuthUserInfo } from 'pages/login/selectors.js'

const Login = ({ translations, authUserInfo }) => {
  return (
    <MainContainer>
      <Header2>{translations.welcome},</Header2>
      <Header1>{authUserInfo.name}!</Header1>
    </MainContainer>
  )
}

Login.propTypes = {
  translations: PropTypes.object,
  authUserInfo: PropTypes.object,
}
const mapStateToProps = (state) => ({
  authUserInfo: getAuthUserInfo(state),
})

export default connect(mapStateToProps)(Login)
