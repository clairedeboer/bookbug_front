import React from "react"

const SearchBar = () => {
  

  return (
    <div className="ui action fluid input">
      <input type="text" placeholder="Search by title or author..." />
      <button className="ui button">Search</button>
    </div>
  )

}

export default SearchBar;