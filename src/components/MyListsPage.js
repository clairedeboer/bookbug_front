import React, { useState } from "react"; 
import ListNav from "./ListNav.js"; 
import ListsContainer from "./ListsContainer.js"

const MyListsPage = ({ currentUser, onFormSubmit }) => {
  const [chosenList, setChosenList] = useState('Want to Read')
  
  const displayList = (list) => {
    setChosenList(list)
  }

  return (
   <div>
     <ListNav onDisplayList={displayList}/>
     <ListsContainer chosenList={chosenList} currentUser={currentUser} onFormSubmit={onFormSubmit} />
   </div> 
    
  )

}

export default MyListsPage;