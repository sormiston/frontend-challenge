import React, { useState, useEffect } from 'react'
import { colorByTag } from '../App'
import styled from 'styled-components'

export default function TextEditor({
  handleClear,
  setIndices,
  data,
  highlight,
  setHighlight,
}) {
  const [splitText, setSplitText] = useState({
    pre: null,
    mid: null,
    pos: null,
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

  return (
    <div className='section has-background-white'>
      <p
        contentEditable={true}
        onKeyDown={(e) => keyDownIntercept(e)}
        onSelect={() => handleSelection()}
        onMouseOver={() => setHighlight({ start: null, end: null, tag: null })}
      >
        {splitText.pre}
        <span
          className={`has-background-${colorByTag(
            highlight.tag
          )}-light`}
        >
          {splitText.mid}
        </span>
        {splitText.pos}
      </p>
    </div>
  )
}
