import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
height: inherit;

#text-viewport {
  height: inherit;
  background-color: red;
  #editor {
    max-width: revert;
    min-width: revert;
    width: revert;
  }
}
`

export default function Layout(props) {
  return (
    <Main>
      <section className="section" id="text-viewport">
        {props.children}
      </section>
      <section className="section" id="annotate-viewport">
        
      </section>
    </Main>
  )
}
