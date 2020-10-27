import React from 'react'
import { ACTIONS } from './App'

export default function TagButton({ tag, dispatch }) {
  console.log('button renders')
  return (
    
      <button
      onClick={(e) => {
        
          dispatch({
            type: ACTIONS.ADD_TAG,
            payload: {
              tag: tag,
              span: { s: 1, e: 2 },
            },
          })
        }}
      >
        Person
      </button>
  
  )
}
