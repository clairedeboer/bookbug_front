import React from "react";
import SearchBar from "./SearchBar.js";
import BooksContainer from "./BooksContainer.js";

const FeaturedBooksPage = ({ books, onListChoice, currentUser }) => {
  const handleListChoice = (status, id) => {
    onListChoice({
      user_id: currentUser.id, 
      book_id: id, 
      status: status, 
    })
  }

  return (
    <div>
      <SearchBar />
      <BooksContainer books={books} onListChoice={handleListChoice} currentUser={currentUser} />
    </div>
  );
};

export default FeaturedBooksPage;
