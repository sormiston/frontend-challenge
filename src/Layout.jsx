import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  height: 100vh;
  display: flex;

  #text-section {
    max-height: 100vh;
    overflow-y: auto;
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
    height: 100vh;
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
  opacity: 1;
  transition: opacity .6s ease-in .4s;
  
  &.hidden {
    opacity: 0;
  }
`

export default function Layout(props) {
  const [buttonBankOffset, setButtonBankOffset] = useState(0)
  const textSectionRef = useRef(null)
  const buttonBankRef = useRef(null)

  useEffect(() => {
    buttonBankOffset === 0 && setButtonBankOffset(textSectionRef.current.offsetWidth)
    buttonBankOffset > 0 && buttonBankRef.current.classList.remove('hidden')
  })
  console.log(props.children[3]);
  
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
          ref={buttonBankRef}
          className='hidden'
          xOffset={
            textSectionRef.current && textSectionRef.current.offsetWidth
          }
        >
          {props.children[2]}
        </ButtonBank>
    
      {/* <section className='section' id='annotate-section'> */}
        {props.children[3]}
      {/* </section> */}
    </Main>
  )
}
