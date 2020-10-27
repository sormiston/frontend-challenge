import React, { useState } from 'react'
import ExcerptCard from './ExcerptCard'
import uuid from 'react-uuid'

export default function AnnotationsReader({ data }) {
  
  const tags = Object.keys(data.tags)

  return (
    <div>
      {tags.map((tag) => {
        return data.tags[tag].map(({ start, end }) => {
          return (
            <ExcerptCard
              key={uuid()}
              tag={tag}
              text={data.text.substring(start, end)}
              start={start}
              end={end}
            />
          )
        })
      })}

      {/* {data.tags.Person.map(({ start, end }, key) => {
        return (
          <ExcerptCard
            key={uuid()}
            text={data.text.substring(start, end)}
            start={start}
            end={end}
          />
        )
      })} */}
    </div>
  )
}
