import React, { useState } from "react";

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
  onListChoice
}) => {
  const [areReviewsShown, setAreReviewsShown] = useState(false);
  const [isWantToReadClicked, setIsWantToReadClicked] = useState(false); 
  const [isReadingClicked, setIsReadingClicked] = useState(false); 
  const [isCompletedClicked, setIsCompletedClicked] = useState(false); 

  const bookReviewDiv = bookReviewsArray.map((review) => {
    return <div key={review.id}>{review.review}</div>;
  });

  const bookRatingsArray = bookReviewsArray.map((review) => review.rating);

  let total = 0;
  for (let i = 0; i < bookRatingsArray.length; i++) {
    total += bookRatingsArray[i];
  }
  const averageRating = (total / bookRatingsArray.length).toFixed(1);

  const handleWantToRead = () => {
    onListChoice("Want to Read", id);
    setIsWantToReadClicked((isWantToReadClicked) => !isWantToReadClicked);
  };

  const handleReading = () => {
    onListChoice("Reading", id);
    setIsReadingClicked((isReadingClicked) => !isReadingClicked);
  };

  const handleCompleted = () => {
    onListChoice("Completed", id);
    setIsCompletedClicked((isCompletedClicked) => !isCompletedClicked);
  };

  return (
    <div className="ui move reveal fluid cards">
      <div className="visible content card">
        <div className="image">
          <img src={thumbNail} alt={title} />
        </div>
      </div>
      <div className="hidden content card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">
            <p>by {authors}</p>
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="ui compact menu">
          {isWantToReadClicked ? ('Want to Read')
          :
          isReadingClicked ? ('Reading')
          :
          isCompletedClicked ? ('Completed')
          :
          (<div className="ui simple dropdown item">
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
            </div>)}
          </div>
          <div className="extra content">
            <span className="left floated">Average Rating: {averageRating} </span>
            <button
              className="ui mini button"
              onClick={(event) => setAreReviewsShown((areReviewsShown) => !areReviewsShown)}
            >
              Reviews
            </button>
          </div>
            {areReviewsShown && (
          <div className="extra content">{bookReviewDiv}</div>
          )}
        </div>
      </div>
      
  );
};

export default BookCard;
