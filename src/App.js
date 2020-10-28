import React, { useReducer, useState, useEffect } from 'react'
import uuid from 'react-uuid'
import TagButton from './Subcomponents/TagButton'
import Layout from './Layout'
import AnnotationsReader from './Components/AnnotationsReader'
import TextEditor from './Components/TextEditor'

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

export function colorByTag(tag) {
  switch (tag) {
    case TAGS.PERSON:
      return 'primary'
    case TAGS.ORG:
      return 'link'
    case TAGS.PLACE:
      return 'warning'
    case TAGS.EVENT:
      return 'danger'
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

// COMPONENT STARTS HERE !

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
  const [highlight, setHighlight] = useState({
    start: null,
    end: null,
  })

  useEffect(() => {
    if (indices.start !== null && indices.start !== indices.end) {
      setSelectionValid(true)
    } else {
      setSelectionValid(false)
    }
  }, [indices])

  function handleClear(e) {
    if (window.confirm('Are you sure you want to clear this text?')) {
      setText('')
      localStorage.removeItem('data')
      dispatch({ type: ACTIONS.CLEAR })
    }
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
            data={data}
            indices={indices}
            setIndices={setIndices}
            handleClear={handleClear}
            highlight={highlight}
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

        <AnnotationsReader data={data} setHighlight={setHighlight} />
      </Layout>
    </div>
  )
}

export default App
