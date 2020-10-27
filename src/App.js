import React, { useReducer, useState, useEffect } from 'react'
import uuid from 'react-uuid'
import TagButton from './TagButton'
import Layout from './Layout'
import AnnotationsReader from './AnnotationsReader'
import TextEditor from './TextEditor'

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

export function color(tag) {
  switch (tag) {
    case TAGS.PERSON:
      return 'is-primary'
    case TAGS.ORG:
      return 'is-link'
    case TAGS.PLACE:
      return 'is-warning'
    case TAGS.EVENT:
      return 'is-danger'
    default:
      return ''
  }
}

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
  const [indices, setIndices] = useState({
    start: null,
    end: null,
  })
  const [selectionValid, setSelectionValid] = useState(false)

  useEffect(() => {
    if (indices.start !== null && indices.start !== indices.end) {
      setSelectionValid(true)
    } else {
      setSelectionValid(false)
    }
  }, [indices])

  function handleClear(e) {
    if (e.keyCode === 8) {
      if (
        window.confirm('Are you sure you want to clear this text?')
      ) {
        setText('')
        localStorage.removeItem('data')
        dispatch({ type: ACTIONS.CLEAR })
      }
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
    dispatch({ type: ACTIONS.CLEAR })
  }

  return (
    <div className='App'>
      <Layout>
        {!!text ? (
          <TextEditor
            // readOnly={!!text}
            text={text}
            // onChange={(e) => {
            //   setText(e.target.value)
            //   dispatch({
            //     type: ACTIONS.MERGE_TEXT,
            //     payload: e.target.value,
            //   })
            // }}
            handleClear={handleClear}
            onSelect={(e) => handleSelect(e)}
          />
        ) : (
          <textarea
              className='textarea has-fixed-size'
            onChange={(e) => {
              setText(e.target.value)
              dispatch({
                type: ACTIONS.MERGE_TEXT,
                payload: e.target.value,
              })
            }}
          />
        )}

        <button className='button' onClick={save}>
          SAVE
        </button>

        {Object.keys(TAGS).map((k) => (
          <TagButton
            key={uuid()}
            tag={TAGS[k]}
            dispatch={dispatch}
            indices={indices}
            selectionValid={selectionValid}
          />
        ))}

        <AnnotationsReader data={data} />
      </Layout>
    </div>
  )
}

export default App
