import React, { useReducer, useState } from 'react'

const ACTIONS = Object.freeze({
  NEW: 'new',
  ADD_TAG: 'add_tag',
  SAVE: 'save',
  CACHE: 'cache',
  CLEAR: 'clear'
})


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NEW:
      return
    case ACTIONS.ADD_TAG:
      return
    case ACTIONS.SAVE:
      return
    case ACTIONS.CACHE:
      return
    case ACTIONS.CLEAR:
      return
    default:
      return
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

function App() {
  const initialState = localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : dataScheme
  
  const [data, dispatch] = useReducer(reducer, initialState)
  const [text, setText] = useState(data.text)

  function handleClear(e) {
    if (e.keyCode === 8) {
      // dispatch to reset + cache
    }
  }
    return (
      <div className='App'>
        <textarea
          readOnly={!!text}
          rows={20}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleClear(e)}
        />
      </div>
    )
}

export default App
