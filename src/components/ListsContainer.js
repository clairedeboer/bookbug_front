import React from "react";
import ListItem from "./ListItem.js";

const ListsContainer = ({
  currentUser,
  chosenList,
  onFormSubmit,
  onEditList,
  onDeleteBook,
}) => {

  const wantToReadBooks = currentUser.user_books.filter((user_book) => user_book.status === "Want to Read")

  // map user_books to books
  const wantToReadListItems = wantToReadBooks.map((book) => {
      return (
        <ListItem
          key={book.id}
          id={book.id}
          thumbnail={book.thumbnail}
          title={book.title}
          authors={book.authors}
          averageRating={book.average_rating}
          onFormSubmit={onFormSubmit}
          currentUser={currentUser}
          onEditList={onEditList}
          onDeleteBook={onDeleteBook}
        />
      );
    });

    const readingBooks = currentUser.user_books.filter((user_book) => user_book.status === "Reading")

    const readingListItems = readingBooks.map((book) => {
    return (
      <ListItem
        key={book.id}
        id={book.id}
        thumbnail={book.thumbnail}
        title={book.title}
        authors={book.authors}
        averageRating={book.average_rating}
        onFormSubmit={onFormSubmit}
        currentUser={currentUser}
        onEditList={onEditList}
        onDeleteBook={onDeleteBook}
      />
    );
  });

    const completedBooks = currentUser.user_books.filter((user_book) => user_book.status === "Completed")

    const completedListItems = completedBooks.map((book) => {
    return (
      <ListItem
        key={book.id}
        id={book.id}
        thumbnail={book.thumbnail}
        title={book.title}
        authors={book.authors}
        averageRating={book.average_rating}
        onFormSubmit={onFormSubmit}
        currentUser={currentUser}
        onEditList={onEditList}
        onDeleteBook={onDeleteBook}
      />
    );
  });

  return (
    <div className="ui divided items">
      {chosenList === "Want to Read" && wantToReadListItems}
      {chosenList === "Reading" && readingListItems}
      {chosenList === "Completed" && completedListItems}
    </div>
  );
};

export default ListsContainer;
