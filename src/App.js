import React, { useState, useEffect } from "react"; 
import './App.css'; 
import NavBar from "./components/NavBar.js"
import FeaturedBooksPage from "./components/FeaturedBooksPage.js"; 
import MyListsPage from "./components/MyListsPage.js"; 
import Login from "./components/Login.js"; 
import Signup from "./components/Signup.js"; 

const App = () => {
  // const [books, setBooks] = useState({items: []})

  // GoogleBooks API integration
  // useEffect(() => {
  //   fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCUg6Zq00sbKP0RiQHgYR23bCJDuKc0D5Y")
  //     .then((response) => response.json())
  //     .then((booksData) => {
  //       setBooks(booksData)})
  // }, [])

  // const bookTitles = books.items.map((itemObj) => itemObj.volumeInfo.title)

  const users = [{name: "Claire"}, {name: "Grant"}, {name: "Jack"}]
  const books = [{title: "Little Women"}, {title: "Amatka"}, {title: "If I Had Two Wings"}]

  return (
    <div>
      <NavBar />
      <FeaturedBooksPage books={books}/>
      <MyListsPage />
      <Login />
      <Signup />
    </div>
    
  )

}

export default App;