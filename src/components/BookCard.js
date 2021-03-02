import React from "react";

const BookCard = ({
  id,
  title,
  authors,
  description,
  thumbNail,
  averageRating,
  vendor,
  price,
  bookReviews,
  onListChoice,
  currentUser
}) => {

  const handleWantToRead = (event) => {
    onListChoice('Want to Read', id);
  };

  const handleReading = (event) => {
    onListChoice('Reading', id);
  };

  const handleCompleted = (event) => {
    onListChoice('Completed', id);
  };

  return (
    <div className="ui fluid cards">
      <div className="card">
        <div className="image">
          <img src={thumbNail} alt={title} />
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
          <div className="ui compact menu">
            <div className="ui simple dropdown item">
              Add to List
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item" onClick={handleWantToRead}>
                  Want to Read
                </div>
                <div className="item" onClick={handleReading}>
                  Reading
                </div>
                <div className="item" onClick={handleCompleted}>
                  Completed
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">{bookReviews}</div>
      </div>
    </div>
  );
};

export default BookCard;
