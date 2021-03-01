import React from "react";
import SearchBar from "./SearchBar.js";
import BooksContainer from "./BooksContainer.js";

const FeaturedBooksPage = ({ books, onListChoice, currentUser }) => {
  const listChoice = (status, id, title, authors, description, thumbNail, averageRating, vendor, price) => {
    onListChoice({
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
      <BooksContainer books={books} onListChoice={listChoice} currentUser={currentUser}/>
    </div>
  );
};

export default FeaturedBooksPage;
