import React from 'react'
import { ACTIONS, TAGS, color } from './App'


export default function TagButton({
  tag,
  dispatch,
  indices,
  selectionValid,
}) {
  

  return (
    <button
    disabled={!selectionValid}
      className={`button ml-3 ${color(tag)}`}
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
