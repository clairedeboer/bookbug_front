import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const BookCard = ({
  id,
  title,
  authors,
  description,
  thumbNail,
  // averageRating,
  vendor,
  price,
  bookReviewsArray,
  onListChoice,
  currentUser,
}) => {
  const [areReviewsShown, setAreReviewsShown] = useState(false);

  const history = useHistory();

  const bookReviewDiv = bookReviewsArray.map((review) => {
    return <div key={review.id}>{review.review}</div>;
  });

  const bookRatingsArray = bookReviewsArray.map((review) => review.rating);

  let total = 0;
  for (let i = 0; i < bookRatingsArray.length; i++) {
    total += bookRatingsArray[i];
  }
  const averageRating = total / bookRatingsArray.length;

  const handleWantToRead = () => {
    onListChoice("Want to Read", id);
    history.push("/lists");
  };

  const handleReading = () => {
    onListChoice("Reading", id);
    history.push("/lists");
  };

  const handleCompleted = () => {
    onListChoice("Completed", id);
    history.push("/lists");
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
          <span className="left floated">Average Rating: {averageRating} </span>
          <button
            className="ui mini button"
            onClick={(event) =>
              setAreReviewsShown((areReviewsShown) => !areReviewsShown)
            }
          >
            Reviews
          </button>
          {areReviewsShown && (
            <div className="extra content">{bookReviewDiv}</div>
          )}
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
      </div>
    </div>
  );
};

export default BookCard;
