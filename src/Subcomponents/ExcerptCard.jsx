import React from 'react'
import { colorByTag } from '../App'

export default function ExcerptCard({ tag, text, start, end, setHighlight }) {
  
  function highlight(e) {
    e.preventDefault()
    setHighlight({start, end, tag})
  }
  
  return (
    <div
      className='card mb-3'
      onMouseEnter={(e) => highlight(e)}
    >
      <header className='card-header'>
        <p className='card-header-title'>
          <span className={`tag is-${colorByTag(tag)}`}>{tag}</span>
        </p>

        {/* reminder: add delete functionality */}
        <span className='icon'>
          <i className='fas fa-angle-down' aria-hidden='true'></i>
        </span>
      </header>
      <div className='card-content'>
        <div className='content'>
          {text}
          <br />
          <small>
            {start} {end}
          </small>
          <br />
        </div>
      </div>
    </div>
  )
}
