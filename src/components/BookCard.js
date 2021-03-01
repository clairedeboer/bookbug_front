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
  const newListObj = {
    user_id: currentUser.id, 
    book_id: id, 
    status: 'Want to Read'
  };

  const handleWantToRead = (event) => {
    onListChoice(newListObj);
  };

  const handleReading = (event) => {
    onListChoice(newListObj);
  };

  const handleCompleted = (event) => {
    onListChoice(newListObj);
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
            <div classsName="ui simple dropdown item">
              Add to List
              <i classsName="dropdown icon"></i>
              <div classsName="menu">
                <div classsName="item" onClick={handleWantToRead}>
                  Want to Read
                </div>
                <div classsName="item" onClick={handleReading}>
                  Reading
                </div>
                <div classsName="item" onClick={handleCompleted}>
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
