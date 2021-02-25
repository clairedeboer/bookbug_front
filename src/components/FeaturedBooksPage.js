import React from "react"; 
import SearchBar from "./SearchBar.js"; 
import BooksContainer from "./BooksContainer.js"; 

const FeaturedBooksPage = ({ books }) => {
  

  return (
    <div>
      <SearchBar />
      <BooksContainer books={books}/>
    </div>
    
  )

}

export default FeaturedBooksPage;