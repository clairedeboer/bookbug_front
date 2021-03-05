import React from "react";
import SearchBar from "./SearchBar.js";
import BooksContainer from "./BooksContainer.js";

const FeaturedBooksPage = ({ onListChoice, currentUser, onSearchChange, displayBooks }) => {
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
      <BooksContainer onListChoice={handleListChoice} displayBooks={displayBooks} />
    </div>
  );
};

export default FeaturedBooksPage;
