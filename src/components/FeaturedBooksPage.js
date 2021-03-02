import React from "react";
import SearchBar from "./SearchBar.js";
import BooksContainer from "./BooksContainer.js";

const FeaturedBooksPage = ({ books, onListChoice, currentUser }) => {
  const handleListChoice = (status, id, title, authors, description, thumbNail, averageRating, vendor, price) => {
    onListChoice({
      id: id, 
      user_id: currentUser.id, 
      book_id: id, 
      status: status, 
      title: title, 
      authors: authors, 
      description: description, 
      thumbNail: thumbNail, 
      averageRating: averageRating, 
      vendor: vendor, 
      price: price
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
