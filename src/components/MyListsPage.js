import React, { useState } from "react"; 
import ListNav from "./ListNav.js"; 
import ListsContainer from "./ListsContainer.js"

const MyListsPage = ({ currentUser, onFormSubmit, onEditList, onDeleteBook, books }) => {
  const [chosenList, setChosenList] = useState('Want to Read')
  console.log('currentUser.userbooks', currentUser.user_books)
  const displayList = (list) => {
    setChosenList(list)
  }

  return (
   <div>
     <ListNav onDisplayList={displayList}/>
     <ListsContainer books={books} chosenList={chosenList} currentUser={currentUser} onFormSubmit={onFormSubmit} onEditList={onEditList} onDeleteBook={onDeleteBook}/>
   </div>   
  )
}

export default MyListsPage;