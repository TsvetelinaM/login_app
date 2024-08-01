import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { MainContainer } from 'components/containers/MainContainer'
import { Header1, Header2 } from 'components/headers/Headers'
import { CenteredFlex } from 'components/layout/Layout'
import { Label } from 'components/form/Label'
import { getAuthUserInfo } from 'pages/login/selectors'

const HomePage = ({ translations, authUserInfo }) => {
  return (
    <MainContainer>
      <CenteredFlex>
        <Header2>{translations.welcome},</Header2>
        <Header1>{authUserInfo.name}!</Header1>
        <Label>{translations.successful_login}!</Label>
      </CenteredFlex>
    </MainContainer>
  )
}

HomePage.propTypes = {
  translations: PropTypes.object,
  authUserInfo: PropTypes.object,
}
const mapStateToProps = (state) => ({
  authUserInfo: getAuthUserInfo(state),
})

export default connect(mapStateToProps)(HomePage)
