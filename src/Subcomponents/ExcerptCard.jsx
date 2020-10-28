import React from 'react'
import { color } from '../App'

export default function ExcerptCard({ tag, text, start, end, setHighlight }) {
  
  return (
    <div
      className='card mb-3'
      onMouseEnter={() => setHighlight({start, end})}
    >
      <header className='card-header'>
        <p className='card-header-title'>
          <span className={`tag ${color(tag)}`}>{tag}</span>
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
