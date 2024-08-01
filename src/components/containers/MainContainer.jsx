import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  box-shadow: grey;
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 40%;
  right: 0;
  padding: 15% 5%;

  @media (max-width: 768px) {
    width: 90%;
    height: 50%;
    top: 25%;
    left: 0;
    margin: 0 auto;
    border-radius: 2rem;
    padding: 5% 5% 0 5%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 50%;
    width: 60%;
    top: 25%;
    left: 0;
    margin: 0 auto;
    border-radius: 2rem;
    padding: 5% 5% 0 5%;
  }

  @media (max-height: 750px) {
    height: 70%;
    top: 15%;
  }
`
