import React, { useReducer, useState } from 'react'
import TagButton from './TagButton'

export const ACTIONS = Object.freeze({
  MERGE_TEXT: 'merge_text',
  ADD_TAG: 'add_tag',
  CACHE: 'cache',
  CLEAR: 'clear',
})

export const TAGS = Object.freeze({
  PERSON: 'Person',
  ORG: 'Organization',
  PLACE: 'Place',
  EVENT: 'Event',
})

const dataScheme = {
  text: '',
  tags: {
    Person: [],
    Organization: [],
    Place: [],
    Event: [],
  },
}

function reducer(state, action) {
  let newState = {}
  switch (action.type) {
    case ACTIONS.MERGE_TEXT:
      newState = {
        ...state,
        text: action.payload,
      }
      cacheData(newState)
      return newState

    case ACTIONS.ADD_TAG:
      const newTagArray = [
        ...state.tags[action.payload.tag],
        action.payload.span,
      ]

      newState = {
        ...state,
        tags: {
          ...state.tags,
          [action.payload.tag]: newTagArray,
        },
      }
    
      cacheData(newState)
      return newState

    case ACTIONS.CLEAR:
      return dataScheme
    default:
      return
  }
}

function cacheData(data) {
  localStorage.setItem('data', JSON.stringify(data))
}

// REACT COMPONENT
function App() {
  const initialState = localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : dataScheme

  const [data, dispatch] = useReducer(reducer, initialState)
  const [text, setText] = useState(data.text)
  const [indices, setIndices] = useState(null)

  function handleClear(e) {
    if (e.keyCode === 8) {
      setText('')
      dispatch({ type: ACTIONS.CLEAR })
    }
  }

  function handleSelect(e) {
    setIndices({
      start: e.target.selectionStart,
      end: e.target.selectionEnd,
    })
  }
  
  function save() {
    alert(`POST request --  \n ${JSON.stringify(data, null, 2)}`)
    localStorage.removeItem('data')
    setText('')
    dispatch({type: ACTIONS.CLEAR })
    
  }

  return (
    <div className='App'>
      <textarea
        readOnly={!!text}
        rows={20}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          dispatch({
            type: ACTIONS.MERGE_TEXT,
            payload: e.target.value,
          })
        }}
        onKeyDown={(e) => handleClear(e)}
        onSelect={(e) => handleSelect(e)}
      />
      <TagButton
        tag={TAGS.PERSON}
        dispatch={dispatch}
        indices={indices}
      />
       <TagButton
        tag={TAGS.ORG}
        dispatch={dispatch}
        indices={indices}
      />
      <TagButton
        tag={TAGS.PLACE}
        dispatch={dispatch}
        indices={indices}
      />
      <TagButton
        tag={TAGS.EVENT}
        dispatch={dispatch}
        indices={indices}
      />
      <button onClick={save}>SAVE</button>
    </div>
  )
}

export default App
