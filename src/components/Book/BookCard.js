import React, { useState } from "react";
import { getAverage } from "../List/ListItem";

const BookCard = ({
  id,
  title,
  authors = [],
  description = "",
  thumbnail,
  bookReviewsArray = [],
  onListChoice,
  currentUser,
}) => {
  const [areReviewsShown, setAreReviewsShown] = useState(false);
  const [isWantToReadClicked, setIsWantToReadClicked] = useState(false);
  const [isReadingClicked, setIsReadingClicked] = useState(false);
  const [isCompletedClicked, setIsCompletedClicked] = useState(false);
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);

  const maxLength = 280;
  const cutDescription = description?.slice(0, maxLength);

  const bookReviewDiv = bookReviewsArray.map((review) => {
    return <div key={review.id}>{review.review}</div>;
  });

  const averageRating = getAverage(bookReviewsArray);

  const handleChoice = (choice) => {
    if (currentUser) {
      onListChoice(choice, {
        id,
        title,
        authors,
        description,
        thumbnail,
      });
      if (choice === "Want to Read") {
        setIsWantToReadClicked((isWantToReadClicked) => !isWantToReadClicked);
      } else if (choice === "Reading") {
        setIsReadingClicked((isReadingClicked) => !isReadingClicked);
      } else if (choice === "Completed") {
        setIsCompletedClicked((isCompletedClicked) => !isCompletedClicked);
      }
    } else {
      alert("Please login or signup to add books to your lists");
    }
  };

  return (
    <div className="ui move up reveal cards" id="book-cards">
      <div className="visible content card">
        <div className="image">
          <img src={thumbnail} alt={title} />
        </div>
      </div>
      <div className="hidden content card" id="hidden-card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">
            <p>by {authors.toString() || "none"}</p>
          </div>
          <div className="description">
            {!isFullDescriptionShown && cutDescription}
            {description.length > 280 && (
              <button
                className="mini ui icon button"
                onClick={(event) =>
                  setIsFullDescriptionShown(
                    (isFullDescriptionShown) => !isFullDescriptionShown
                  )
                }
              >
                <i className="ellipsis horizontal icon"></i>
              </button>
            )}
            {isFullDescriptionShown && (
              <div className="description" id="description">
                {description}
              </div>
            )}
          </div>
          <div className="ui compact menu">
            {isWantToReadClicked ? (
              "Want to Read"
            ) : isReadingClicked ? (
              "Reading"
            ) : isCompletedClicked ? (
              "Completed"
            ) : (
              <div className="ui simple dropdown item">
                Add to List
                <i className="dropdown icon"></i>
                <div className="menu">
                  <div
                    className="item"
                    onClick={() => handleChoice("Want to Read")}
                  >
                    Want to Read
                  </div>
                  <div className="item" onClick={() => handleChoice("Reading")}>
                    Reading
                  </div>
                  <div
                    className="item"
                    onClick={() => handleChoice("Completed")}
                  >
                    Completed
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="extra content" id="ratings">
          <span className="left floated">Average Rating: {averageRating} </span>
          {bookReviewsArray.length > 0 && (
            <button
              className="ui mini button"
              onClick={(event) =>
                setAreReviewsShown((areReviewsShown) => !areReviewsShown)
              }
            >
              Reviews
            </button>
          )}
        </div>
        {areReviewsShown && (
          <div className="extra content" id="reviews">
            {bookReviewDiv}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
