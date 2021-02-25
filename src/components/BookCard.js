import React from "react"

const BookCard = ({ title, authors, description, thumbNail, averageRating, vendor, price }) => {
  

  return (
    <div className="ui fluid cards">
      <div className="card">
        <div className="image">
          <img src={thumbNail} alt={title}/>
        </div>
        <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <p>by {authors}</p>
        </div>
        <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <span className="left floated">Average Rating: {averageRating}</span>
          <button className="ui mini button">Reviews</button>
          <button className="ui small button">Want to Read</button>
        </div>
      </div>
    </div> 
  )

}

export default BookCard;