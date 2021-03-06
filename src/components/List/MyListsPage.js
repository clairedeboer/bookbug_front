import React, { useState } from "react";
import ListNav from "./ListNav";
import ListsContainer from "./ListsContainer";

const MyListsPage = ({
  currentUser,
  onFormSubmit,
  onEditList,
  onDeleteBook,
  books,
}) => {
  const [chosenList, setChosenList] = useState("Want to Read");
  const displayList = (list) => {
    setChosenList(list);
  };

  return (
    <div className="ui stackable grid">
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
