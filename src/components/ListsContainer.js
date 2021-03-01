import React from "react"; 
import ListItem from "./ListItem.js"

const ListsContainer = ({ currentUser, chosenList, onFormSubmit }) => {
  
  const wantToReadListItems = currentUser.want_to_read.map ((book) => {
    return <ListItem key={book.id} id={book.id} thumbnail={book.thumbnail} title={book.title} authors={book.authors} averageRating ={book.average_rating} onFormSubmit={onFormSubmit} currentUser={currentUser}/>
  })

  const readingListItems = currentUser.reading.map ((book) => {
    return <ListItem key={book.id} id={book.id} thumbnail={book.thumbnail} title={book.title} authors={book.authors} averageRating ={book.average_rating} onFormSubmit={onFormSubmit} currentUser={currentUser}/>
  })

  const completedListItems = currentUser.completed.map ((book) => {
    return <ListItem key={book.id} id={book.id} thumbnail={book.thumbnail} title={book.title} authors={book.authors} averageRating ={book.average_rating} onFormSubmit={onFormSubmit} currentUser={currentUser}/>
  })
  
  
  return (
    <div className="ui divided items">
      {chosenList === 'Want to Read' && wantToReadListItems}
      {chosenList === 'Reading' && readingListItems}
      {chosenList === 'Completed' && completedListItems}
    </div>
    
  )

}

export default ListsContainer;