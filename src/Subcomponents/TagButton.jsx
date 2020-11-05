import React from 'react'
import { ACTIONS, colorByTag } from '../utils'


export default function TagButton({
  tag,
  dispatch,
  indices,
  selectionValid,
  setIndices
}) {
  
  return (
    <button
    disabled={!selectionValid}
      className={`button m-3 is-${colorByTag(tag)}`}
    onClick={(e) => {
      
        dispatch({
          type: ACTIONS.ADD_TAG,
          payload: {
            tag: tag,
            span: indices,
          },
        })
      
      setIndices({
        start: null,
        end: null
      })
      
      }}
    >
      {tag}
    </button> 
  )
  
}
