import React from "react";
import SearchBar from "./SearchBar.js";
import BooksContainer from "./BooksContainer.js";

const FeaturedBooksPage = ({ books, onListChoice, currentUser }) => {
  return (
    <div>
      <SearchBar />
      <BooksContainer books={books} onListChoice={onListChoice} currentUser={currentUser}/>
    </div>
  );
};

export default FeaturedBooksPage;
