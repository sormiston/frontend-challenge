# Welcome!

## Build and Deploy     

1. Fork and clone down repo
1. cd to repo root and run `npm i`
1. `npm run start` to intialize React dev server on localhost

## Description

This 24 hour challenge was my coding challenge to join Priberam in May 2021.
The goal was to create an interface where text can be pasted into a workspace and annotated with **4 kinds of tag** (Person, Place, Organization, or Event).
Tags must be allowed to overlap, for example, "The President hosted a ceremonial dinner at the White House" could have a Person tag for "President," a Place tag for "White House," and an Event tag for the entire sentence.
Work done must persist if the user reloads the page.
Clicking "Save" represents an end of workflow, by displaying a JSON object which represents a payload usable in a POST HTTP request, and local work is reset.

## Project Flow

1. On page load, user may copy text into the textarea.  Text pasted here will be selectable, but to preserve the integrity of the text, no characters can be added or removed thereafter.  

2. User may select text excerpts by clicking and dragging.  The annotation buttons become active when a selection is detected.  Click a category tag to annotate to that category.  Annotations appear in the annotations display in the order they appear in the text - *regardless of time of user entry* - to preserve comparative continuity.

3. All work (text + annotations) will persist in local storage, until the user either a) clicks SAVE or b) hits `backspace`.  Hitting backspace will clear all work (after a confirmation message).  Hitting SAVE will display the JSON data object that is made ready for a POST request to backend, and then clear all work on local storage.

4. To check the context surrounding annotations, *hover* your mourse cursor over an annotation card.  You will see that annotation highlighted in the text.

5. Highlights that are activated out of view will be scrolled to inside the text editor.  You can test this by making edits across differnt regions of a longer text.


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
| Reducer Function Save to DB (+ clear) | theoretical ajax POST | H | OK
| Cache helper function | | H |  OK
| Clear/New function | | M |  OK |
| tag sidebar | 4 tags that dispatch start and end indices on click; differentiated by payload | H | OK |
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
| Disable possibility to annotate word fragment | helper algo | M | OK |
| investigate if useContext can help maintain state sharing | | L
| Algorithm for auto scrolling to hightlights in text editor |  | H | OK


<br>


## Change Log

### 1.1 :memo:

:bug: Highlight state persisting after data clearance <br/>
:ambulance: highlight state cleared on ExcerptCard's mouseLeave listener

:bug: Scrolling not tracking highlight span when it rerenders outside of viewport
:ambulance: corrected useEffect to ComponentDidUpdate cycle with component state `splitText` as dependency

:bug: mouse selections made "backwards" - where user clicks end idx and backtracks to start - are breaking the pre-highlight-pos model of how text editor renders.
:ambulance: Math.min and Math.max applied to retrict ascending-order values to start and end, respectively, in TextEditor.jsx - handleSelection.

### 1.2 :memo:

:bug: spellcheck attribute not applying on texteditor paragraph
:ambulance: `spellCheck` setting via JS

:bug: console error against `contentEditable component having children managed by React` - refers to <p> of TextEditor.jsx.
:ambulance: not a concerning error, since keyDown events are intentionally intercepted to prevent user manipulation (except for backspace clears.)  fixed to suppress console with `supressContentEditableWarning` prop set to `false`.

