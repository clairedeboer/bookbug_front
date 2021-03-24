import React from "react";
import ListItem from "./ListItem.js";

const ListsContainer = ({
  currentUser,
  chosenList,
  onFormSubmit,
  onEditList,
  onDeleteBook,
  books,
}) => {
  const wantToReadUserBooks = currentUser.user_books.filter(
    (user_book) => user_book.status === "Want to Read"
  );
  const wantToReadBooks = books.filter((book) => {
    return !!wantToReadUserBooks.find(
      (user_book) => user_book.book_id === book.id
    );
  });

  const wantToReadListItems = wantToReadBooks.map((book) => {
    return (
      <ListItem
        key={book.id}
        id={book.id}
        thumbnail={book.thumbnail}
        title={book.title}
        authors={book.authors}
        bookReviewsArray={book.reviews}
        onFormSubmit={onFormSubmit}
        currentUser={currentUser}
        onEditList={onEditList}
        onDeleteBook={onDeleteBook}
      />
    );
  });

  const readingUserBooks = currentUser.user_books.filter(
    (user_book) => user_book.status === "Reading"
  );
  const readingBooks = books.filter((book) => {
    return !!readingUserBooks.find(
      (user_book) => user_book.book_id === book.id
    );
  });
  const readingListItems = readingBooks.map((book) => {
    return (
      <ListItem
        key={book.id}
        id={book.id}
        thumbnail={book.thumbnail}
        title={book.title}
        authors={book.authors}
        bookReviewsArray={book.reviews}
        onFormSubmit={onFormSubmit}
        currentUser={currentUser}
        onEditList={onEditList}
        onDeleteBook={onDeleteBook}
      />
    );
  });

  const completedUserBooks = currentUser.user_books.filter(
    (user_book) => user_book.status === "Completed"
  );
  const completedBooks = books.filter((book) => {
    return !!completedUserBooks.find(
      (user_book) => user_book.book_id === book.id
    );
  });
  const completedListItems = completedBooks.map((book) => {
    return (
      <ListItem
        key={book.id}
        id={book.id}
        thumbnail={book.thumbnail}
        title={book.title}
        authors={book.authors}
        bookReviewsArray={book.reviews}
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
