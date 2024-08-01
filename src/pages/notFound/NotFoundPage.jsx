import React from 'react'
import { PropTypes } from 'prop-types'

import { MainContainer } from 'components/containers/MainContainer'
import { BackBtn } from 'components/buttons/Buttons'
import { Header1 } from 'components/headers/Headers'
import { Centered } from 'components/layout/Layout'
import { loginPath } from 'services/utils/AppVars'

const NotFoundPage = ({ translations }) => {
  return (
    <MainContainer>
      <BackBtn to={loginPath}>{translations.back_login}</BackBtn>
      <Centered>
        <Header1>{translations.not_found}</Header1>
      </Centered>
    </MainContainer>
  )
}

NotFoundPage.propTypes = {
  translations: PropTypes.object,
}

export default NotFoundPage
