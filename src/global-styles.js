import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: white;
    color: #2F3437;
    overflow: hidden;
    -moz-user-select: none; 
    -ms-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
    display: flex;
  }
`

export default GlobalStyle
