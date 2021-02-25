import React from "react"

const BookCard = ({ books }) => {
  const bookCard = books.map((book)=> book.title)

  return (
    <div>Book Card {bookCard}</div>
    
  )

}

export default BookCard;