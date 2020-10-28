import React, { useRef } from 'react'
import styled from 'styled-components'

export default function TextEditor({
  handleClear,
  setIndices,
  indices,
  text,
}) {
  

  const pRef = useRef(null)

  function keyDownIntercept(e) {
    if (e.keyCode === 8) handleClear(e)
    e.preventDefault()
  }
  function handleSelection() {
    const start = window.getSelection().anchorOffset
    const end = window.getSelection().focusOffset
    // const offset = sum of length of previous spans in the split-lines array
    
    if (start !== end) {
      setIndices({
        start: start,
        end: end,
      })
    } else {
      setIndices({
        start: null,
        end: null,
      })
    }
  }

  console.log(indices)
  
  function printText(text) {
    let beg = text.substring(0, 80)
    let mid = text.substring(80, 160)
    let end = text.substring(160)
    return [beg, mid, end]
  }
  
  const [beg, mid, end] = printText(text)
  console.log(indices)
  
  return (
    <div className='section has-background-white'>
      <p
        ref={pRef}
        contentEditable={true}
        onKeyDown={(e) => keyDownIntercept(e)}
        onSelect={() => handleSelection()}
      >
        <span>{beg}</span>
        <span>{mid}</span>
        <span>{end}</span>
      </p>
    </div>
  )
}
