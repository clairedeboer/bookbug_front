import React, { useState } from "react";
import ListNav from "./ListNav.js";
import ListsContainer from "./ListsContainer.js";

const MyListsPage = ({
  currentUser,
  onFormSubmit,
  onEditList,
  onDeleteBook,
  books,
}) => {
  console.log('my lists page', currentUser)
  const [chosenList, setChosenList] = useState("Want to Read");
  const displayList = (list) => {
    setChosenList(list);
  };

  return (
    <div className="ui grid">
      <div className="four wide column">
        <ListNav onDisplayList={displayList} />
      </div>
      <div className="twelve wide column">
        <ListsContainer
          books={books}
          chosenList={chosenList}
          currentUser={currentUser}
          onFormSubmit={onFormSubmit}
          onEditList={onEditList}
          onDeleteBook={onDeleteBook}
        />
      </div>
    </div>
  );
};

export default MyListsPage;
