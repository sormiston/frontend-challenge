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

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

export default function AnnotationsReader({ data, setHighlight }) {
  function orderAnnotations() {
    // aggregate
    let result = []
    Object.keys(data.tags).forEach((tag) => {
      let substrObjects = data.tags[tag].map((sso) => {
        return { ...sso, tag }
      })
      result = result.concat(substrObjects)
    })

    // sort
    result.sort((a, b) => {
      return a.start - b.start
    })

    // map
    result = result.map((sso) => {
      const substr = data.text.substring(sso.start, sso.end)
      const tag = sso.tag
      const start = sso.start
      const end = sso.end
      return { string: substr, tag, start, end }
    })

    return result
  }

  return (
    <NotesDisplay>
      {orderAnnotations().map((ann) => {
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
