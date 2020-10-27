import React from 'react'
import { ACTIONS } from './App'

export default function TagButton({ tag, dispatch, indices }) {
  
  return (
    
      <button
      onClick={(e) => {
        
          dispatch({
            type: ACTIONS.ADD_TAG,
            payload: {
              tag: tag,
              span: indices,
            },
          })
        }}
      >
        {tag}
      </button>
  
  )
}
