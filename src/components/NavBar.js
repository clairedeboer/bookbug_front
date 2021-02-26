import React from "react"; 
import { Link } from "react-router-dom";

const NavBar = () => {
  

  return (
    <div className="ui four item menu">
      <Link className="active item" to="/books">BookBug</Link>
      <Link className="item" to="/books">Featured Books</Link>
      <Link className="item" to="/lists">My Lists</Link>
      <Link className="item" to="/users/login">Login</Link>
      <Link className="item" to="/users/signup">Signup</Link>
    </div>    
  )

}

export default NavBar;