import React from "react"; 
import ListItem from "./ListItem.js"

const ListsContainer = ({ currentUser }) => {
  
  const listItems = currentUser.books.map ((book) => {
    return <ListItem key={book.id} thumbnail={book.thumbnail} title={book.title} authors={book.authors} averageRating ={book.average_rating}  />
  })
  
  return (
    <div className="ui divided items">
      {listItems}
    </div>
    
  )

}

export default ListsContainer;