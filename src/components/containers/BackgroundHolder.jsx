import styled from 'styled-components'

import login from 'assets/images/login.jpg'

export const BackgroundHolder = styled.div`
  position: absolute;
  width: 60%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${login});
  background-size: cover;
  background-position: 60% 0;
  background-repeat: no-repeat;
  z-index: -1;

  @media (min-width: 0) and (max-width: 1024px) {
    width: 100%;
  }
`
