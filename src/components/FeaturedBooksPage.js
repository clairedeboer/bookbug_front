import React from "react";
import SearchBar from "./SearchBar.js";
import BooksContainer from "./BooksContainer.js";

const FeaturedBooksPage = ({
  onListChoice,
  currentUser,
  onSearchChange,
  displayBooks,
}) => {
  const handleListChoice = (status, bookObj) => {
    if (currentUser) {
      onListChoice({
        user_id: currentUser.id,
        book: bookObj,
        status,
      });
    } 
  };

  return (
    <div>
      <SearchBar onSearchChange={onSearchChange} />
      <BooksContainer
        onListChoice={handleListChoice}
        displayBooks={displayBooks}
        currentUser={currentUser}
      />
    </div>
  );
};

export default FeaturedBooksPage;
