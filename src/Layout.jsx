import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import TextEditor from './Components/TextEditor'

const Main = styled.main`
  height: 100vh;
  display: flex;

  #text-section-ancestor {
    width: 60%;  
    max-height: 100vh;
    display: flex;
    flex-flow: column;
  }
  
  #text-section {
    overflow-y: auto;
    display: flex;
    flex-flow: column;
    
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
  width: 170px;
  height: 100vh;
  left: 60%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.6s ease-in 0.4s;

  &.hidden {
    opacity: 0;
  }
`

export default function Layout(props) {
  const [buttonBankOffset, setButtonBankOffset] = useState(0)
  
  const buttonBankRef = useRef(null)

  useEffect(() => {
    buttonBankRef.current.classList.remove('hidden')
  })

  return (
    <Main>
      <section
        className='section has-background-light' id='text-section-ancestor'
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
      <ButtonBank ref={buttonBankRef} className='hidden'>
        {props.children[2]}
      </ButtonBank>
      {props.children[3]}
    </Main>
  )
}
