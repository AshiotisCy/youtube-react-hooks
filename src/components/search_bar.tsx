import React from "react";

interface Props { onSearchTermChange: any }

// I have changed the file by adding a new function onClickButton to run the search of the video after the search button is pressed.
// It might be more convinient to have the API run everyTime the user types something but i didnt find it efficient because the quata of my API was expiring.

function SearchBar(props: Props) {

  const { onSearchTermChange } = props
  const [term, setTerm] = React.useState("")

  const onInputChange = (term: string) => {
    setTerm(term)
  }

  const onclickButton = (term: string) => {
    onSearchTermChange(term)
  }

  return (
    <div className="search-bar">
      <input className="search-bar-inputField"
        value={term}
        onChange={event => onInputChange(event.target.value)}
      />
      <button className="searchButton" onClick={() => onclickButton(term)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </div>
  )


  /**
   * Function that is being called every time the input has been changed
   * @param {*} term
   */

}

export default SearchBar;
