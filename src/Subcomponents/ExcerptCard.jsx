import React from 'react'
import { colorByTag } from '../utils'

export default function ExcerptCard({
  tag,
  text,
  start,
  end,
  setHighlight,
}) {
  return (
    <div
      className='card mb-3'
      onMouseEnter={() =>
        setHighlight({ start, end, tag, active: true })
      }
      onMouseLeave={() =>
        setHighlight((prev) => ({ ...prev, active: false }))
      }
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
            start {start} - end {end}
          </small>
          <br />
        </div>
      </div>
    </div>
  )
}
