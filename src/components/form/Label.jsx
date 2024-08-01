import styled from 'styled-components'

export const Label = styled.label`
  width: 100%;
  padding: 1.2rem 0;
  align-self: flex-start;
  box-sizing: border-box;
  flex-shrink: 0;
  text-transform: capitalize;
  display: block;
`

export const ErrorMsg = styled(Label)`
  color: red;
  text-transform: none;
  padding: 1.2rem 0 0 0;
`
