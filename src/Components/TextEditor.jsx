import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

export default function TextEditor({
  handleClear,
  setIndices,
  indices,
  data,
}) {
  const [highlights, setHighlights] = useState([])
  const pRef = useRef(null)

  useEffect(() => {
    setHighlights(getHighlights())
  }, [])
  
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

  function getHighlights() {
    // aggregate
    let result = []
    Object.keys(data.tags).forEach((tag) => {
      let substrObjects = data.tags[tag].map((sso) => {
        return { ...sso, tag }
      })
      result = result.concat(substrObjects)
    })

    // sort -- NOT NEEDED
    result.sort((a, b) => {
      return a.start - b.start
    })
    
    // map (results in { string, tag } -- NOT NEEDED )
    result = result.map(sso => {
      const substr = data.text.substring(sso.start, sso.end)
      const tag = sso.tag
      return { string: substr, tag }
    })
    
    // [ {start, end, tag}, ... ]
    return result
  }

  // for selection popover functionality
  // function splitTextArray(data) {
  //   Object.keys(data.tags).forEach((tag) => {})
  // }

  // const [beg, mid, end] = printText(data)
  

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
