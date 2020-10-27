import React, { useState } from 'react'
import ExcerptCard from './ExcerptCard'
import uuid from 'react-uuid'

export default function AnnotationsReader({ data }) {
  // extract tag arrays from data object - POPE
  
  return (
    <div>
      {data.tags.Person.map(({ start, end }, key) => {
        return (
          <ExcerptCard
            key={uuid()}
            text={data.text.substring(start, end)}
            start={start}
            end={end}
          />
        )
      })}
    </div>
  )
}
