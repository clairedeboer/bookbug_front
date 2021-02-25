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

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((bookData) => { setBooks(bookData)})
  }, [])

  return (
    <div>
      <NavBar />
        <Switch>
          <Route exact path="/books">
            <FeaturedBooksPage books={books}/>
          </Route>
          <Route exact path="/lists">
            <MyListsPage />
          </Route>
          <Route exact path="/users/login">
            <Login />
          </Route>
          <Route exact path="/users/signup">
          <Signup />
          </Route>
      </Switch>
    </div>
    
  )

}

export default App;