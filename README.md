
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
| Reducer Function Save to DB (+ clear) | theoretical ajax POST | H | OK
| Cache helper function | | H |  OK
| Clear/New function | | M |  OK |
| tag sidebar | 4 tags that dispatch start and end indices on click; differentiated by payload | H
| Persist state of selected text | `onSelect` event + handler + `useState` | | OK 
<br />

---

<br />

### Task Manager: _Sprint 2_
| Task | Implementation | Priority | Done |
| ---- | :------------: | -------- | ---- |
| Layout Basic     |  ~20% sidebar as annotations dash | H | OK
|  Card subcomponents design | pen and paper; include delete button, index nums (5 minutes!)  | M | OK
| Card subcomponents implementation | pass data to `annotationsReader`; `annotationsReader` must implement algo to build array of excerpts and print this as map of cards| H
| Annotations reader w/ filter tabs |  | M
| Filter Functionality | AnnotationsReader.jsx - filter tabs connected to state variable + state variable is filter term for .map render | M 
| Buttons "come alive" with valid text selection / otherwise disabled | `<TagButton>` components sunshine under `selectionValid` state | L  | OK

<br />

---

<br />

### Task Manager: _Sprint 3_
| Task | Implementation | Priority | Done |
| ---- | :------------: | -------- | ---- |
| _Sprint 3_ |
| Implement Highlighting | split text with spans according to indices; good time to split textarea as compnent separate from app| H | |
| Intercept clears or pastes with chance to save | | L | |
| Disable possibility to annotate word fragment | helper algo | M | |
| refactor text state into reducer |  | L
| investigate if useContext can help share state |

<br>

### Task Manager: _Sprint 4_
| Task | Implementation | Priority | Done |
| ---- | :------------: | -------- | ---- |
| _Sprint 4_ |
| Dot indicator on lines with annotations | L
| Resizable text port | L
| Color indications on textbox to indicate ready/text locked |


### Observations

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


### Component Tree

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
