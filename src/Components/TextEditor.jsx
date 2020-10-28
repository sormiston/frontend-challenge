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
    pos: null,
  })

  const spanRef = useRef(null)
  const scrollParentRef = useRef(null)
  const pRef = useRef(null)

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

  useEffect(() => {
    const viewTop = scrollParentRef.current.scrollTop
    const viewBottom = scrollParentRef.current.clientHeight + viewTop
    const eltPos = spanRef.current.offsetTop

    if (eltPos < viewTop) {
      scrollParentRef.current.scrollTo(
        0,
        -1 * Math.abs(eltPos - viewTop)
      )
    } else if (eltPos > viewBottom) {
      scrollParentRef.current.scrollTo(0, eltPos - viewBottom + 100)
    }
  }, [highlight])

  if (scrollParentRef.current && spanRef.current) {
    console.log('viewTop ' + scrollParentRef.current.scrollTop)
    console.log('elt ' + spanRef.current.offsetTop)
    console.log(
      'viewBottom ' +
        scrollParentRef.current.clientHeight +
        scrollParentRef.current.scrollTop
    )
  }
  // Focus carat to editable <p> to prevent scroll skipping on card mouseOvers!
  useEffect(() => pRef.current.focus(), [])

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
    <div
      ref={scrollParentRef}
      className='section has-background-white'
      id='text-section'
    >
      <p
        ref={pRef}
        contentEditable={true}
        spellcheck={false}
        onKeyDown={(e) => keyDownIntercept(e)}
        onSelect={() => handleSelection()}
        // onMouseOver={() =>
        //   setHighlight({ start: null, end: null, tag: null })
        // }
      >
        {splitText.pre}
        <span
          ref={spanRef}
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
