import React, { useState } from "react";

const ListItem = ({
  id,
  thumbnail,
  title,
  authors,
  averageRating,
  onFormSubmit,
  currentUser,
  onEditList,
  onDeleteBook
}) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleShowReviewForm = () => {
    setIsFormShown(true);
  };

  const handleRating = (event) => setRating(event.target.value);

  const handleReview = (event) => setReview(event.target.value);

  const newReview = {
    book_id: id,
    user_id: currentUser.id,
    rating,
    review,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(newReview);
  };

  const handleWantToReadEdit = (event) => {
    onEditList('Want to Read', id);
  };

  const handleReadingEdit = (event) => {
    onEditList('Reading', id);
  };

  const handleCompletedEdit = (event) => {
    onEditList('Completed', id);
  };

  const handleDeleteBook = (event) => {
    onDeleteBook(id); 
  }

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
            <button className="ui right floated button" onClick={handleDeleteBook}>Delete</button>
            <div className="ui compact menu">
              <div className="ui simple dropdown item">
                Edit List
                <i className="dropdown icon"></i>
                <div className="menu">
                  <div className="item" onClick={handleWantToReadEdit}>
                    Want to Read
                  </div>
                  <div className="item" onClick={handleReadingEdit}>
                    Reading
                  </div>
                  <div className="item" onClick={handleCompletedEdit}>
                    Completed
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui left floated button"
              onClick={handleShowReviewForm}
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
      {isFormShown && (
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              value={rating}
              onChange={handleRating}
            />
          </div>
          <div className="field">
            <label>Review</label>
            <input
              type="text"
              name="review"
              placeholder="Review"
              value={review}
              onChange={handleReview}
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
