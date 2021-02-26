import React from "react"; 
import ListItem from "./ListItem.js"

const ListsContainer = ({ lists, currentUser }) => {
  lists.filter((list) => list.user_id === currentUser.id)

  console.log(currentUser)
  return (
    <div>
      <ListItem />
    </div>
    
  )

}

export default ListsContainer;