import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 2rem;
  font-family: inherit;
  width: 100%;
  height: 5rem;
  border: 0.1rem solid #5a5a5a;
  box-sizing: border-box;
  letter-spacing: 0.03em;
  background-color: white;
  margin: 0;
  :focus {
    outline: none !important;
    border: 0.1rem solid #0e9571;
    background-color: white;
    box-shadow: 0 0 0.5rem #719ece;
  }
`
