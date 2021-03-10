import React from "react"; 
import { Link } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  

  return (
    <div className="ui four item menu">
      {/* <Link className="active item" to="/books">BookBug</Link> */}
      <Link className="item" to="/books">Featured Books</Link>
      <Link className="item" to="/lists">My Lists</Link>
      {!currentUser ? <Link className="item" to="/users/login">Login</Link> : <Link className="item" to="/users/login">Logout</Link>}
      {!currentUser ? <Link className="item" to="/users/signup">Signup</Link> : <Link className="item" to="/users/signup">Welcome {currentUser.name}!</Link>}
    </div>    
  )

}

export default NavBar;