import React, { useReducer, useState } from 'react'

function reducer() { }

function App() {
  
  const initialState =
    localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : {
      text: "",
      tags: {
        Person: [],
        Organization: [],
        Place: [],
        Event: []
      }
    }
  const [data, dispatch] = useReducer(reducer, initialState)
  const [text, setText] = useState(initialState.text)
  
  return <div className='App'></div>
}

export default App
