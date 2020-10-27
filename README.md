### Goals

| Task | Implementation | Priority | Done |
| ---- | :------------: | -------- | ---- |
| _Sprint 1_
| Functioning textarea | | H | OK |
| Cannot alter text, only copy/paste/select/clear | `<textArea readOnly={!!text}>` | L | OK
| initial text state | `useState` initializes to `data`,defaults to empty string | H | OK
| initial data state | text attr tracks component state, Tags intialize as []s | H | OK
| Reducer Function merge text ( + cache) | | H | OK
| Reducer Function add tag ( + cache) | | H |
| Reducer Function Save to DB (+ clear) | theoretical ajax POST | H |
| Cache function | | H | |
| Clear/New function | | | OK |
| tag sidebar | 4 tags that dispatch start and end indices on click; differentiated by payload | H
| Persist state of selected text | `useState` |
| _Sprint 2_ |
| Define caching flow w/ local storage | | | |
| _Sprint 3_ |
| Intercept clears or pastes with chance to save | | L | |

<br>

### Data scheme:

```json
const data = {
  "text": "...full text",
  "tags": {
    "Person": [
      {
        "start": <start_index>,
        "end": <end_index>
      }
    ]
  }
}
```

### State

<br>

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components.

# PRIBERAM FRONTEND CHALLEGNE

---

## Architecture & Dependency set-up

- npxcreate-react-app

### Additional installs:

- <npm package>

### Uninstalled:

---

### Key Terms

- <term>

---

### Process

1. Removals and changes to npx express-generator scaffolding:

- Import passport
- ...

---

## Observations
