import React, { useState, useEffect } from "react"; 
import { Route, Switch } from "react-router-dom";
import './App.css'; 
import NavBar from "./components/NavBar.js"
import FeaturedBooksPage from "./components/FeaturedBooksPage.js"; 
import MyListsPage from "./components/MyListsPage.js"; 
import Login from "./components/Login.js"; 
import Signup from "./components/Signup.js"; 

const App = () => {
  // GoogleBooks API integration
  // const [books, setBooks] = useState({items: []})

  // useEffect(() => {
  //   fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCUg6Zq00sbKP0RiQHgYR23bCJDuKc0D5Y")
  //     .then((response) => response.json())
  //     .then((booksData) => {
  //       setBooks(booksData)})
  // }, [])

  // const bookTitles = books.items.map((itemObj) => itemObj.volumeInfo.title)

  const [books, setBooks] = useState([]); 
  const [users, setUsers] = useState([]); 
  const [lists, setLists] = useState([]); 
  // const [reviews, setReviews] = useState([]); 
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((bookData) => {setBooks(bookData)})
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((userData) => {setUsers(userData)})
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/lists")
      .then((response) => response.json())
      .then((userBookData) => {setLists(userBookData)})
  }, [])

  // useEffect(() => {
  //   fetch("http://localhost:3000/reviews")
  //     .then((response) => response.json())
  //     .then((reviewData) => {setReviews(reviewData)})
  // }, [])

  const addNewCurrentUser = (newCurrentUser) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
        body: JSON.stringify(newCurrentUser), 
      })
      .then((response) => response.json())
      .then((newUser) => {setCurrentUser(newUser)})
  };

  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((response) => response.json())
      .then((userData) => { setCurrentUser(userData)})
  }, [])

  return (
    <div>
      <NavBar currentUser={currentUser}/>
        <Switch>
          <Route exact path="/books">
            <FeaturedBooksPage books={books}/>
          </Route>
          <Route exact path="/lists">
            <MyListsPage lists={lists} currentUser={currentUser}/>
          </Route>
          <Route exact path="/users/login">
            <Login onSubmit={addNewCurrentUser}/>
          </Route>
          <Route exact path="/users/signup">
          <Signup />
          </Route>
      </Switch>
    </div>
    
  )

}

export default App;