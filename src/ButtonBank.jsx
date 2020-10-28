import React from 'react'
import styled from 'styled-components'

const ButtonSection = styled.div` 
  position: fixed;
  width: 150px;
  height: 100vh;
  left: ${props => props.xOffset}px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export default function ButtonBank(props) {
  console.log(props.xOffset)
  return (
    <ButtonSection xOffset={props.xOffset}>
      {props.children}
    </ButtonSection>
  )
}
