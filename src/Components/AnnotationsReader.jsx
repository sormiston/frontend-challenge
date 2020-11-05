import React from 'react'
import ExcerptCard from '../Subcomponents/ExcerptCard'
import uuid from 'react-uuid'
import styled from 'styled-components'
import { orderAnnotations, sortTypes } from '../utils'

const NotesDisplay = styled.section`
  height: 100vh;
  width: 40%;
  overflow-y: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

export default function AnnotationsReader({ data, setHighlight }) {
  
  return (
    <NotesDisplay>
      {orderAnnotations(data, sortTypes.SEQUENTIAL).map((ann) => {
        return (
          <ExcerptCard
            key={uuid()}
            tag={ann.tag}
            text={ann.string}
            start={ann.start}
            end={ann.end}
            setHighlight={setHighlight}
          />
        )
      })}
    </NotesDisplay>
  )
}
