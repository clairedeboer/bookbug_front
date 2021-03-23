import React from "react";
import BookCard from "./BookCard.js";

const BooksContainer = ({ onListChoice, displayBooks }) => {
  const bookCards = displayBooks?.map((displayBook) => {
    return (
      <BookCard
        key={displayBook.id}
        id={displayBook.id}
        title={displayBook.title}
        authors={displayBook.authors}
        description={displayBook.description}
        thumbnail={displayBook.thumbnail}
        bookReviewsArray={displayBook.reviews}
        onListChoice={onListChoice}
      />
    );
  });

  return (
    <div className="ui three column grid" id="grid">
      {bookCards?.slice(0, 15)}
    </div>
  );
};

export default BooksContainer;
