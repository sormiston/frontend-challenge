# Welcome!

## Build and Deploy     

1. Fork and clone down repo
1. cd to repo root and run `npm i`
1. `npm run start` to intialize React dev server on localhost

## Project Flow

1. On page load, user may copy text into the textarea.  Text pasted here will be selectable, but to preserve the integrity of the text, no characters can be added or removed.

1. User may select text excerpts by clicking and dragging.  The annotation buttons become active when a selection is detected.  Click a category tag to annotate to that category.  Annotations are added to the read out display *in the order they appear in the text*, for easier reading continuity.

1. All work (text + annotations) will persist via local storage, until the user either a) clicks SAVE or b) hits `backspace`.  Hitting backspace will clear all work (after a confirmation message).  Hitting SAVE will display the JSON data object that is made ready for a POST request to backend, and then clear all work including local storage.

1. Both the text editor and the annotations reader are fixed viewport scroll areas, so add as many annotations as you like without losing your place in the text!

1. *Hover* over an annotation card to see that annotation highlighted in the text.

1. There is also an algorithm to auto scroll to the highlight in the text editor if it is outside of the viewport, altough there are still bugs there.

1. Foi um baita desafio, e agredeço muito pela oportunidade.  Espero que gostem, e muito obrigado!!


<br />

---

<br />

### Task Manager: _Sprint 1_
| Task | Implementation | Priority | Done |
| ---- | :------------: | -------- | ---- |
| Functioning textarea | | H | OK |
| Cannot alter text, only copy/paste/select/clear | Ternary: Render \<textarea> element to receive user paste input, else render TextEditor component.  In TextEditor component, preventDefault on keyDown events protects text from editing.  <br />(_See Sprint 3 note about refactoring_)| L | OK
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
| Card subcomponents implementation | pass data to `annotationsReader`; `annotationsReader` must implement algo to build array of excerpts and print this as map of cards| M | OK
| Annotations reader w/ filter tabs |  | M
| Filter Functionality | AnnotationsReader.jsx - filter tabs connected to state variable + state variable is filter term for .map render | M 
| Buttons "come alive" with valid text selection / otherwise disabled | `<TagButton>` components sunshine under `selectionValid` state | L  | OK

<br />

---

<br />

### Task Manager: _Sprint 3_ (POST MVP)
| Task | Implementation | Priority | Done |
| ------------- | :------------: | -------- | ---- |
| _Sprint 3_ |
| *In-line Popup annotator* | See [medium-editor open source](https://github.com/yabwe/medium-editor) for implementation / ideas.  | L | 
| *Implement Highlighting* | onMouseEnter of Excerpt Cards alters App State; passes indices to render a span in text editor| H | OK
| Disable possibility to annotate word fragment | helper algo | M | |
| refactor text state into reducer |  | L
| investigate if useContext can help share state | | L
| Algorithm for auto scrolling to hightlights in text editor |  | H | OK


<br>


## Change Log

### 1.1 :memo:

:bug: Highlight state persisting after data clearance <br/>
:ambulance: highlight state cleared on ExcerptCard's mouseLeave listener

:bug: Scrolling not tracking highlight span when it rerenders outside of viewport
:ambulance: corrected useEffect to ComponentDidUpdate cycle with component state `splitText` as dependency

:bug: mouse selections made "backwards" - where user clicks end idx and backtracks to start - are breaking the pre-highlight-pos model of how text editor renders.
:ambulance: Math.min and Math.max applied to retrict ascending-order values to start and end, respectively, in the handleSelection.

### 1.2 :memo:

:bug: spellcheck attribute not applying on texteditor paragraph
:ambulance: `spellCheck` setting via JS

:bug: console error against `contentEditable component having children managed by React` - refers to <p> of TextEditor.jsx.
:ambulance: not a concerning error, since keyDown events are intentionally intercepted to prevent user manipulation (except for backspace clears.)  fixed to suppress console with `supressContentEditableWarning` prop set to `false`.

