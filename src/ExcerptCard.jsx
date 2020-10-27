import React from 'react'

export default function ExcerptCard({ text, start, end }) {
  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>Component</p>
        <a
          href='#'
          className='card-header-icon'
          aria-label='more options'
        >
          <span className='icon'>
            <i className='fas fa-angle-down' aria-hidden='true'></i>
          </span>
        </a>
      </header>
      <div className='card-content'>
        <div className='content'>
          {text}
          <small>
            {start} {end}
          </small>
          <br />
          
        </div>
      </div>
    </div>
  )
}
