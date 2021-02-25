import React from "react"; 
import BookCard from "./BookCard.js"; 

const BooksContainer = ({ books }) => {


  return (
    <div>
      <BookCard books={books}/>
    </div>
    
  )

}

export default BooksContainer;