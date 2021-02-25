import React from "react"; 
import BookCard from "./BookCard.js"; 

const BooksContainer = ({ books }) => {
  const bookCards = books.map((book) => {
    return <BookCard key={book.id} title={book.title} authors={book.authors} description={book.description} thumbNail={book.thumbnail} averageRating={book.average_rating} vendor={book.vendor} price={book.price} />;
  });

  return (
    <div className="ui three column grid">
      {bookCards}
    </div>
    
  )

}

export default BooksContainer;