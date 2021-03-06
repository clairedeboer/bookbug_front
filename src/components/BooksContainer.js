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
        // averageRating={displayBook.average_rating}
        // vendor={displayBook.vendor}
        // price={displayBook.price}
        bookReviewsArray={displayBook.reviews}
        onListChoice={onListChoice}
      />
    );
  });

  return <div className="ui three column grid">{bookCards}</div>;
};

export default BooksContainer;
