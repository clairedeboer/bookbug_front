import React from "react";
import SearchBar from "./SearchBar.js";
import BooksContainer from "./BooksContainer.js";

const FeaturedBooksPage = ({ books, onListChoice, currentUser, onSearchChange }) => {
  const handleListChoice = (status, id) => {
    onListChoice({
      user_id: currentUser.id, 
      book_id: id, 
      status: status, 
    })
  }

  return (
    <div>
      <SearchBar onSearchChange={onSearchChange} />
      <BooksContainer books={books} onListChoice={handleListChoice} />
    </div>
  );
};

export default FeaturedBooksPage;
