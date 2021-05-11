import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const getAverage = (bookReviewsArray) => {
  const bookRatingsArray = bookReviewsArray.map((review) => review.rating);
  let total = 0;
  for (let i = 0; i < bookRatingsArray.length; i++) {
    total += bookRatingsArray[i];
  }
  return bookRatingsArray.length
    ? (total / bookRatingsArray.length).toFixed(1)
    : 5;
};

const ListItem = ({
  id,
  thumbnail,
  title,
  authors,
  bookReviewsArray = [],
  onFormSubmit,
  currentUser,
  onEditList,
  onDeleteBook,
}) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const history = useHistory();

  const newReview = {
    book_id: id,
    user_id: currentUser.id,
    rating,
    review,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(newReview);
    history.push("/books");
  };

  const averageRating = getAverage(bookReviewsArray);

  const handleLinkOut = () => {
    const dashTitle = title.toLowerCase().trim().split(/\s+/).join("+");
    window.open(`https://bookshop.org/books?keywords=${dashTitle}`, "_blank");
  };

  const ratingsDiv = [1, 2, 3, 4, 5].map((rating) => {
    return (<div className="field">
      <div className="ui radio checkbox">
        <input
          type="radio"
          name="frequency"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <label>{rating}</label>
      </div>
    </div>)
  });

  return (
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">
            <span className="cinema">by {authors}</span>
          </div>
          <div className="description">
            <p>Average Rating: {averageRating}</p>
          </div>
          <div className="extra">
            <button
              className="ui right floated button"
              id="delete-button"
              onClick={(event) => onDeleteBook(id)}
            >
              Delete
            </button>
            <div className="ui compact menu">
              <div className="ui simple dropdown item">
                Edit List
                <i className="dropdown icon"></i>
                <div className="menu">
                  <div
                    className="item"
                    onClick={(event) => onEditList("Want to Read", id)}
                  >
                    Want to Read
                  </div>
                  <div
                    className="item"
                    onClick={(event) => onEditList("Reading", id)}
                  >
                    Reading
                  </div>
                  <div
                    className="item"
                    onClick={(event) => onEditList("Completed", id)}
                  >
                    Completed
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui left floated button"
              onClick={(event) => setIsFormShown(true)}
            >
              Add Review
            </button>
          </div>
          <div className="description">
            BUY A COPY
            <button className="bookshop-button" onClick={handleLinkOut}>
              BookShop
            </button>
          </div>
        </div>
      </div>

      {isFormShown && (
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <label>Rating</label>
            {ratingsDiv}
          </div> 
          <div className="field">
            <label>Review</label>
            <input
              type="text"
              name="review"
              placeholder="Review"
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ListItem;
