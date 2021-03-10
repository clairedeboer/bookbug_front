import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.js";
import FeaturedBooksPage from "./components/FeaturedBooksPage.js";
import MyListsPage from "./components/MyListsPage.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";

const GOOGLEBOOKSAPIKEY = "AIzaSyCUg6Zq00sbKP0RiQHgYR23bCJDuKc0D5Y";

const App = () => {
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const searchChange = (searchedWord) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchedWord}&key=${GOOGLEBOOKSAPIKEY}`
    )
      .then((response) => response.json())
      .then((googleBooksData) => {
        const mappedData = googleBooksData.items?.map((item) => {
          return {
            title: item.volumeInfo.title,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            id: item.id,
            key: item.id,
          };
        });
        setDisplayBooks(mappedData);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((bookData) => {
        setBooks(bookData);
        setDisplayBooks(bookData);
      });
  }, []);

  const formSubmit = (newReview) => {
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((newReview) => {
        const newBooksArray = books.map((book) => {
          if (book.id === newReview.book_id) {
            return { ...book, reviews: [...book.reviews, newReview] };
          } else {
            return book;
          }
        });
        setBooks(newBooksArray);
        setDisplayBooks(newBooksArray);
      });
  };

  const addNewCurrentUser = (newCurrentUser) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCurrentUser),
    })
      .then((response) => response.json())
      .then((newUser) => setCurrentUser(newUser));
  };

  const addNewUser = (newSignup) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSignup),
    })
      .then((response) => response.json())
      .then((newUser) => {
        setCurrentUser(newUser);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((response) => response.json())
      .then((userData) => setCurrentUser(userData));
  }, []);

  const listChoice = (newUserBookObj) => {
    const foundUserBook = currentUser.user_books.find(
      (user_book) => user_book.book_id === newUserBookObj.book.id
    );
    if (foundUserBook) {
      return;
    }

    // if book is a google book then create a new book in data
    if (typeof newUserBookObj.book.id === "string") {
      createBookFromGoogleBook(newUserBookObj.book).then((googleBook) => {
        createUserBook(newUserBookObj.user_id, googleBook.id, newUserBookObj.status)
        setBooks([...books, googleBook]);
        setDisplayBooks([...displayBooks, googleBook]);
      });
    } else {
      createUserBook(newUserBookObj.user_id, newUserBookObj.book.id, newUserBookObj.status);
    }
  };

  const createUserBook = (userId, bookId, status) => {
    fetch("http://localhost:3000/user_books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId, 
        book_id: bookId,
        status: status,
      }),
    })
      .then((response) => response.json())
      .then((userBook) => {
        const updatedUserBooks = [...currentUser.user_books, userBook];
        setCurrentUser({
          ...currentUser,
          user_books: updatedUserBooks,
        });
      });
  };

  const createBookFromGoogleBook = (newUserBookObj) => {
    return fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newUserBookObj,
        authors: newUserBookObj.authors.toString(),
      }),
    }).then((response) => response.json());
  };

  const editList = (status, bookId) => {
    const toEditUserBookObj = currentUser.user_books.find(
      (user_book) => user_book.book_id === bookId
    );
    return fetch(`http://localhost:3000/user_books/${toEditUserBookObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: status }),
    })
      .then((response) => response.json())
      .then((userBook) => {
        const nonUpdatedUserBooks = currentUser.user_books.filter(
          (userBook) => userBook.book_id !== bookId
        );
        setCurrentUser({
          ...currentUser,
          user_books: [...nonUpdatedUserBooks, userBook],
        });
      });
  };

  const deleteBook = (bookId) => {
    const toDeleteUserBookObj = currentUser.user_books.find(
      (user_book) => user_book.book_id === bookId
    );
    fetch(`http://localhost:3000/user_books/${toDeleteUserBookObj.id}`, {
      method: "DELETE",
    }).then((userBooksData) => {
      setCurrentUser({
        ...currentUser,
        user_books: currentUser.user_books.filter(
          (user_book) => user_book.book_id !== bookId
        ),
      });
    });
  };

  return (
    <div>
      <NavBar currentUser={currentUser} />
      <Switch>
        <Route exact path="/books">
          {currentUser && (
            <FeaturedBooksPage
              onListChoice={listChoice}
              currentUser={currentUser}
              onSearchChange={searchChange}
              displayBooks={displayBooks}
            />
          )}
        </Route>
        <Route exact path="/lists">
          {currentUser && (
            <MyListsPage
              currentUser={currentUser}
              onFormSubmit={formSubmit}
              onEditList={editList}
              onDeleteBook={deleteBook}
              books={books}
            />
          )}
        </Route>
        <Route exact path="/users/login">
          <Login onSubmit={addNewCurrentUser} />
        </Route>
        <Route exact path="/users/signup">
          <Signup onSubmit={addNewUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
