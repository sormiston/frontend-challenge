import React, { useReducer, useState, useEffect } from 'react'
import uuid from 'react-uuid'
import TagButton from './Subcomponents/TagButton'
import Layout from './Layout'
import AnnotationsReader from './Components/AnnotationsReader'
import TextEditor from './Components/TextEditor'
import {ACTIONS, TAGS, colorByTag, dataScheme, reducer, cacheData} from './utils'


// COMPONENT STARTS HERE !

function App() {
  const initialState = localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : dataScheme

  const [data, dispatch] = useReducer(reducer, initialState)
  const [indices, setIndices] = useState({
    start: null,
    end: null,
  })
  const [selectionValid, setSelectionValid] = useState(false)
  const [highlight, setHighlight] = useState({
    start: null,
    end: null,
    tag: null,
    active: false,
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
      localStorage.removeItem('data')
      dispatch({ type: ACTIONS.CLEAR })
    }
  }

  function save() {
    alert(`POST request --  \n ${JSON.stringify(data, null, 2)}`)
    localStorage.removeItem('data')
    dispatch({ type: ACTIONS.CLEAR })
  }

  return (
    <Layout>
      {!!data.text ? (
        <TextEditor
          data={data}
          indices={indices}
          setIndices={setIndices}
          handleClear={handleClear}
          highlight={highlight}
          setHighlight={setHighlight}
        />
      ) : (
        <textarea
          className='textarea has-fixed-size'
          onChange={(e) => {
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
          setIndices={setIndices}
          selectionValid={selectionValid}
        />
      ))}

      <AnnotationsReader data={data} setHighlight={setHighlight} />
    </Layout>
  )
}

export default App
