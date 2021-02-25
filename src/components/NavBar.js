import React from "react"; 
import { Link } from "react-router-dom";

const NavBar = () => {
  

  return (
    <div className="ui four item menu">
      <Link className="active item">BookBug</Link>
      <Link className="item">Featured Books</Link>
      <Link className="item">My Lists</Link>
      <Link className="item">Login/Signup</Link>
    </div>    
  )

}

export default NavBar;