### Goals
| Task                |  Implementation | Priority | Done |
| ------------------- | :------: | ---------------| -----|
| *Sprint 1*
| Functioning textarea |  | H |  |
| Cannot alter text, only copy/paste/select/clear  |    `<textArea readOnly={!!text}>` |   L 
| initial text state | `useState` initializes to `data`,defaults to empty string | H | OK
| initial data state |  text attr tracks component state, Tags intialize as []s | H | OK
| Reducer Function merge text ( + cache) |    | H |
| Reducer Function add tag ( + cache) |      | H |
| Reducer Function Save to DB (+ clear) | theoretical ajax POST   | H |
| Cache function |                        |   | H |
| Clear/New function |                      |     | M |
| tag sidebar | 4 tags that dispatch start and end indices on click; differentiated by payload | H
| *Sprint 2* |
| Define caching flow w/ local storage   |    |   |   |
| *Sprint 3* |
| Intercept clears or pastes with chance to save  |    |  L |   |
    

### Sprint 1 changelog:
+ 6:03 attempting to apply updated text area to reducer via useEffect
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

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |


