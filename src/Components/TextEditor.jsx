import React, { useState, useEffect, useRef } from 'react'
import { colorByTag } from '../App'

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
    pos: data.text,
  })

  const spanRef = useRef(null)
  const scrollParentRef = useRef(null)
  const pRef = useRef(null)

  useEffect(() => {
    if (highlight.active) {
      const pre = data.text.slice(0, highlight.start)
      const mid = data.text.slice(highlight.start, highlight.end)
      const pos = data.text.slice(highlight.end)

      setSplitText({
        pre,
        mid,
        pos,
      })
    }
  }, [highlight])

  useEffect(() => {
    if (highlight.active) {
      spanRef.current.scrollIntoView({ block: 'center' })
    }
  }, [splitText])

  function keyDownIntercept(e) {
    if (e.keyCode === 8) handleClear(e)
    e.preventDefault()
  }
  function handleSelection() {
    const start = Math.min(
      window.getSelection().anchorOffset,
      window.getSelection().focusOffset
    )
    const end = Math.max(
      window.getSelection().anchorOffset,
      window.getSelection().focusOffset
    )

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
    <div
      ref={scrollParentRef}
      className='section has-background-white'
      id='text-section'
    >
      <p
        // potential future refactor to avoid `contentEditable` issue:
        // contentEditable false, and retool onSelect as getting window.getSelection values on mouseUp event

        ref={pRef}
        contentEditable={true}
        spellcheck={false}
        onKeyDown={(e) => keyDownIntercept(e)}
        onSelect={() => handleSelection()}
      >
        {splitText.pre}
        <span
          ref={spanRef}
          className={
            highlight.active
              ? `has-background-${colorByTag(highlight.tag)}-light`
              : ''
          }
        >
          {splitText.mid}
        </span>
        {splitText.pos}
      </p>
    </div>
  )
}
