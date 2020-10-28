import React, { useRef } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  height: inherit;
  display: flex;

  #text-section {
    height: inherit;
    display: flex;
    flex-flow: column;
    width: 60%;

    #editor {
      max-width: revert;
      min-width: revert;
      width: revert;
    }
  }
  #divider {
    min-width: 150px !important;
    height: 100vh;
  }

  #annotate-section {
    width: 40%;
  }
`

const ButtonBank = styled.div`
  position: fixed;
  width: 150px;
  height: 100vh;
  left: ${(props) => props.xOffset}px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export default function Layout(props) {
  const textSectionRef = useRef(null)

  return (
    <Main>
      <section
        ref={textSectionRef}
        className='section has-background-light'
        id='text-section'
      >
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>{props.children[1]}</div>
          </div>
          <div className='level-right'>
            <div className='level-item'></div>
          </div>
        </div>
        {props.children[0]}
      </section>
      <section id='divider'></section>
      <ButtonBank
        xOffset={
          textSectionRef.current && textSectionRef.current.offsetWidth
        }
      >
        {props.children[2]}
      </ButtonBank>
      <section className='section' id='annotate-section'>
        {props.children[3]}
      </section>
    </Main>
  )
}
