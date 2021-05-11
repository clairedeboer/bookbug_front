import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import FeaturedBooksPage from "./components/Book/FeaturedBooksPage";
import MyListsPage from "./components/List/MyListsPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useHistory } from "react-router-dom";

const GOOGLEBOOKSAPIKEY =
  process.env.REACT_APP_GOOGLEBOOKSAPIKEY ||
  "AIzaSyCUg6Zq00sbKP0RiQHgYR23bCJDuKc0D5Y";
const apiUrl = process.env.REACT_APP_APIURL || "http://localhost:3000";

const App = () => {
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const searchChange = (searchedWord) => {
    if (searchedWord) {
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
    } else {
      setTimeout(() => setDisplayBooks(books), 500);
    }
  };

  useEffect(() => {
    fetch(`${apiUrl}/books`)
      .then((response) => response.json())
      .then((bookData) => {
        setBooks(bookData);
        setDisplayBooks(bookData);
      });
  }, []);

  const formSubmit = (newReview) => {
    fetch(`${apiUrl}/reviews`, {
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
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCurrentUser),
    })
      .then((response) => response.json())
      .then((data) => {
        const { user, token } = data;
        localStorage.setItem("token", token);
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setCurrentUser(user);
          history.push("/");
        }
      });
  };

  const addNewUser = (newSignup) => {
    fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSignup),
    })
      .then((response) => response.json())
      .then((data) => {
        const { user, token } = data;
        localStorage.setItem("token", token);
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setCurrentUser(user);
          history.push("/");
        }
      });
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    fetch(`${apiUrl}/`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }).then((response) => response.json());
    // .then((userData) => setCurrentUser(userData));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    history.push("/users/login");
  };

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
        createUserBook(
          newUserBookObj.user_id,
          googleBook.id,
          newUserBookObj.status
        );
        setBooks([...books, googleBook]);
        setDisplayBooks([...displayBooks, googleBook]);
      });
    } else {
      createUserBook(
        newUserBookObj.user_id,
        newUserBookObj.book.id,
        newUserBookObj.status
      );
    }
  };

  const createUserBook = (userId, bookId, status) => {
    fetch(`${apiUrl}/user_books`, {
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
    return fetch(`${apiUrl}/books`, {
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
    return fetch(`${apiUrl}/user_books/${toEditUserBookObj.id}`, {
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
    fetch(`${apiUrl}/user_books/${toDeleteUserBookObj.id}`, {
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
      <NavBar currentUser={currentUser} logout={logout} />
      <Switch>
        <Route exact path="/">
          <FeaturedBooksPage
            onListChoice={listChoice}
            currentUser={currentUser}
            onSearchChange={searchChange}
            displayBooks={displayBooks}
          />
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
          <Login
            errors={errors}
            onSubmit={addNewCurrentUser}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path="/users/signup">
          <Signup errors={errors} onSubmit={addNewUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
