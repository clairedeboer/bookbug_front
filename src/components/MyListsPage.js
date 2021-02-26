import React from "react"; 
import ListNav from "./ListNav.js"; 
import ListsContainer from "./ListsContainer.js"

const MyListsPage = ({ lists, currentUser }) => {
  

  return (
   <div>
     <ListNav />
     <ListsContainer lists={lists} currentUser={currentUser}/>
   </div> 
    
  )

}

export default MyListsPage;