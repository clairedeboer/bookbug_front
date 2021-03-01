import React from "react";
import BookCard from "./BookCard.js";

const BooksContainer = ({ books, onListChoice, currentUser }) => {
  const bookCards = books.map((book) => {
    const bookReviews = book.reviews.map((review) => review.review);
    return (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        authors={book.authors}
        description={book.description}
        thumbNail={book.thumbnail}
        averageRating={book.average_rating}
        vendor={book.vendor}
        price={book.price}
        bookReviews={bookReviews}
        onListChoice={onListChoice}
        currentUser={currentUser}
      />
    );
  });

  return <div className="ui three column grid">{bookCards}</div>;
};

export default BooksContainer;
