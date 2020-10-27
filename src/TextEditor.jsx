import React, { useRef } from 'react'
import styled from 'styled-components'

export default function TextEditor({ handleClear, ...props }) {
  // const [hack, setHack] = useState(true)

  const pRef = useRef(null)

  function keyDownIntercept(e) {
    if (e.keyCode === 8) handleClear(e)
    e.preventDefault()
  }

  return (
    <div className='section has-background-white'>
      <p
        ref={pRef}
        contentEditable={true}
        onKeyDown={(e) => keyDownIntercept(e)}
      >
        {props.text}
      </p>
    </div>
  )
}
