import React, { useRef } from 'react'
import styled from 'styled-components'

export default function TextEditor({ ...props }) {
  // const [hack, setHack] = useState(true)
  
  const pRef = useRef(null)
   
  // useEffect(() => {
  //   if (!hack) {
  //     console.log('useEffect didmount');
  //     pRef.current.contentEditable = true
  //   }
  
  // }, [])
  function keyDownIntercept(e) {
    
  }

  
  return (
    <div
      className='section has-background-white'  
    >
      <p
        ref={pRef}
        contentEditable={true}
        onKeyDown={(e) => keyDownIntercept(e)}
        
        
      >{props.text}</p>
    </div>
  )
}
