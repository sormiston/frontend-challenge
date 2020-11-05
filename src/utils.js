
export const ACTIONS = Object.freeze({
  MERGE_TEXT: 'merge_text',
  ADD_TAG: 'add_tag',
  CACHE: 'cache',
  CLEAR: 'clear',
})

export const TAGS = Object.freeze({
  PERSON: 'Person',
  ORG: 'Organization',
  PLACE: 'Place',
  EVENT: 'Event',
})

export function colorByTag(tag) {
  switch (tag) {
    case TAGS.PERSON:
      return 'primary'
    case TAGS.ORG:
      return 'link'
    case TAGS.PLACE:
      return 'warning'
    case TAGS.EVENT:
      return 'danger'
    default:
      return ''
  }
}

export const dataScheme = {
  text: '',
  tags: {
    Person: [],
    Organization: [],
    Place: [],
    Event: [],
  },
}

export function reducer(state, action) {
  let newState = {}
  switch (action.type) {
    case ACTIONS.MERGE_TEXT:
      newState = {
        ...state,
        text: action.payload,
      }
      cacheData(newState)
      return newState

    case ACTIONS.ADD_TAG:
      const newTagArray = [
        ...state.tags[action.payload.tag],
        action.payload.span,
      ]

      newState = {
        ...state,
        tags: {
          ...state.tags,
          [action.payload.tag]: newTagArray,
        },
      }

      cacheData(newState)
      return newState

    case ACTIONS.CLEAR:
      return dataScheme
    default:
      return
  }
}

export function cacheData(data) {
  localStorage.setItem('data', JSON.stringify(data))
}

export const sortTypes = Object.freeze({
  SEQUENTIAL: 'sequential',
  LONG_TO_SHORT: 'long_to_short'
})

export function orderAnnotations(data, sort) {
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
    if (sort === sortTypes.SEQUENTIAL) return a.start - b.start
    if (sort === sortTypes.LONG_TO_SHORT) {
      return(a.start - a.end) - (b.start - b.end)
    }
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

