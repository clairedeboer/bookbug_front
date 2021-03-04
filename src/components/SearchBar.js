import React, { useState } from "react";

const SearchBar = ({ onSearchChange }) => {
  const [searchedWord, setSearchedWord] = useState("");
  const handleSearchChange = (searchedWord) => {
    setSearchedWord(searchedWord);
    onSearchChange(searchedWord);
  };

  return (
    <div className="ui action fluid input">
      <input
        type="text"
        placeholder="Search by title or author..."
        value = {searchedWord}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
      <button className="ui button">Search</button>
    </div>
  );
};

export default SearchBar;
