import React, { useRef } from 'react'
import styled from 'styled-components'

export default function TextEditor({
  handleClear,
  setIndices,
  indices,
  data,
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

  console.log(data)
  
  // for selection popover functionality
  // function splitTextArray(data) {
  //   Object.keys(data.tags).forEach((tag) => {})
  // }

  // const [beg, mid, end] = printText(data)
  console.log(indices)

  return (
    <div className='section has-background-white'>
      <p
        ref={pRef}
        contentEditable={true}
        onKeyDown={(e) => keyDownIntercept(e)}
        onSelect={() => handleSelection()}
      >
        {data.text}
      
      </p>
    </div>
  )
}
