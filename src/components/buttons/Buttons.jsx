import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackBtn = styled(Link)`
  color: black;
  display: block;
  margin-bottom: 3rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const SubmitBtn = styled.button`
  width: 20rem;
  height: 5rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  color: white;
  background-color: #0047ab;
  margin: 2rem auto;
  border: 0;
  display: block;
  &:hover {
    cursor: pointer;
    background-color: #6495ed;
  }
  &:disabled {
    cursor: initial;
    background-color: #6495ed;
  }
`
