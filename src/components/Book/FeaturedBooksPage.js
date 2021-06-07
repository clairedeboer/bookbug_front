import React from "react";
import SearchBar from "./SearchBar";
import BooksContainer from "./BooksContainer";

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
