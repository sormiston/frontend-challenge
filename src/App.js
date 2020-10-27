import React, { useReducer, useState, useRef} from 'react'
import TagButton from './TagButton'

export const ACTIONS = Object.freeze({
  MERGE_TEXT: 'merge_text',
  ADD_TAG: 'add_tag',
  SAVE: 'save',
  CACHE: 'cache',
  CLEAR: 'clear',
})

export const TAGS = Object.freeze({
  PERSON: 'Person',
  ORG: 'Organization',
  PLACE: 'Place',
  EVENT: 'Event'
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
        action.payload.span
      ]
      
      newState = {
        ...state,
        tags: {
          ...state.tags,
          Person: newTagArray,
        },
      }
      return newState
      
    case ACTIONS.SAVE:
      // clear cache
      return
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
  const [text, setText] = useState(initialState.text)
  
  const textAreaRef = useRef(null)

  function handleClear(e) {
    if (e.keyCode === 8) {
      setText('')
      dispatch({ type: ACTIONS.CLEAR })
    }
  }
  
  function handleSelect(e) {
    console.log(e.target.selectionStart)
  }

  return (
    <div className='App'>
      <textarea
        ref={textAreaRef}
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
      <TagButton tag={TAGS.PERSON} dispatch={dispatch} />
      <button
        id='Person'
        onClick={(e) => {
          dispatch({
            type: ACTIONS.ADD_TAG,
            payload: {
              tag: e.target.id,
              span: { s: 1, e: 2 },
            },
          })
        }}
      >
        Person
      </button>
      <button
        id='Person'
        onClick={(e) => {
          dispatch({
            type: ACTIONS.ADD_TAG,
            payload: {
              tag: e.target.id,
              span: { s: 1, e: 2 },
            },
          })
        }}
      >
        Person
      </button>
      <button
        id='Person'
        onClick={(e) => {
          dispatch({
            type: ACTIONS.ADD_TAG,
            payload: {
              tag: e.target.id,
              span: { s: 1, e: 2 },
            },
          })
        }}
      >
        Person
      </button>
    </div>
  )
}

export default App
