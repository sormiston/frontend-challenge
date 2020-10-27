
### Task Manager: _Sprint 1_
| Task | Implementation | Priority | Done |
| ---- | :------------: | -------- | ---- |
| Functioning textarea | | H | OK |
| Cannot alter text, only copy/paste/select/clear | `<textArea readOnly={!!text}>` | L | OK
| initial text state | `useState` initializes to `data`,defaults to empty string | H | OK
| initial data state | text attr tracks component state, Tags intialize as []s | H | OK
| Update Text attr of state on Paste ( + cache) | see MERGE_TEXT action in reducer| H | OK
| Add Tags ( + cache) | reducer: see ADD_TAG | H | OK
|
| Reducer Function Save to DB (+ clear) | theoretical ajax POST | H |
| Cache helper function | | H |  OK
| Clear/New function | | M |  OK |
| tag sidebar | 4 tags that dispatch start and end indices on click; differentiated by payload | H
| Persist state of selected text | `onSelect` event + handler + `useState` | | OK 
---

### Task Manager: _Sprint 2_
| Task | Implementation | Priority | Done |
| ---- | :------------: | -------- | ---- |
| Implement Highlighting | split text with spans according to indices; good time to split textarea as compnent separate from app| H | |
| Buttons "come alive" when text is selected |   |   |
| _Sprint 3_ |
| Intercept clears or pastes with chance to save | | L | |

<br>
### Observations
#### Sprint 1
+ After a paste event, a "selection" will exist at the final string index.  
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

#### State

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
