import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
height: inherit;
display: flex;

#text-section {
  height: inherit;
  /* background-color: red; */
  display: flex;
  flex-flow: column;
  width: 60%;
  
  #editor {
    max-width: revert;
    min-width: revert;
    width: revert;
    
 
  }
}

#annotate-section {
  flex-grow: 1
}
`

export default function Layout(props) {
  
  return (
    <Main>
      <section className="section has-background-light" id="text-section">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              {props.children[1]}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              {props.children[2]}
            </div>
          </div>
        </div>
        {props.children[0]}
      </section>
      <section className="section" id="annotate-section">
          {props.children[3]}
      </section>
    </Main>
  )
}
