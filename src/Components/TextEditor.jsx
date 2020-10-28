import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function TextEditor({
  handleClear,
  setIndices,
  data,
  highlight,
}) {
  const [splitText, setSplitText] = useState({
    pre: null,
    mid: null,
    pos: null
  })

  useEffect(() => {
    
      const pre = data.text.slice(0, highlight.start)
      const mid = data.text.slice(highlight.start, highlight.end)
      const pos = data.text.slice(highlight.end)

      setSplitText({
        pre,
        mid,
        pos,
      })
    
  }, [highlight])

  function keyDownIntercept(e) {
    if (e.keyCode === 8) handleClear(e)
    e.preventDefault()
  }
  function handleSelection() {
    const start = window.getSelection().anchorOffset
    const end = window.getSelection().focusOffset

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

  console.log(splitText.pre)
  console.log(splitText.mid)
  console.log(splitText.pos)

  return (
    <div className='section has-background-white'>
      <p
        contentEditable={true}
        onKeyDown={(e) => keyDownIntercept(e)}
        onSelect={() => handleSelection()}
      >
        {data.text}
      </p>
    </div>
  )
}
