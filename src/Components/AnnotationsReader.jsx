import React from 'react'
import ExcerptCard from '../Subcomponents/ExcerptCard'
import uuid from 'react-uuid'
import styled from 'styled-components'

const NotesDisplay = styled.section`
 height: 100vh;
 width: 40%;
  overflow-y: auto;
   /* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

export default function AnnotationsReader({ data, setHighlight }) {
  
  const tags = Object.keys(data.tags)

  return (
    <NotesDisplay>
      {tags.map((tag) => {
        return data.tags[tag].map(({ start, end }) => {
          return (
            <ExcerptCard
              key={uuid()}
              tag={tag}
              text={data.text.substring(start, end)}
              start={start}
              end={end}
              setHighlight={setHighlight}
            />
          )
        })
      })}
    </NotesDisplay>
  )
}
