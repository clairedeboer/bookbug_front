import React from "react"; 
import ListNav from "./ListNav.js"; 
import ListsContainer from "./ListsContainer.js"

const MyListsPage = ({ currentUser }) => {
  

  return (
   <div>
     <ListNav />
     <ListsContainer currentUser={currentUser}/>
   </div> 
    
  )

}

export default MyListsPage;