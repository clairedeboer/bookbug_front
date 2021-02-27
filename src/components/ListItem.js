import React from "react"; 

const ListItem = ({ thumbnail, title, authors, averageRating }) => {
  
  return (
    <div className="ui items">
      <div className="item">
      <div className="image">
        <img src={thumbnail} alt={title}/>
      </div>
      <div className="content">
        <a className="header">{title}</a>
      <div className="meta">
        <span className="cinema">by {authors}</span>
      </div>
      <div className="description">
        <p>Average Rating: {averageRating}</p>
      </div>
      <div className="extra">
        <div className="ui right floated button">Delete</div>
        <div className="ui right floated button">Edit</div>
        <div className="ui left floated button">Add Review</div>
      </div>
    </div>
  </div>
    </div>
  )

}

export default ListItem;