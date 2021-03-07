import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ListItem = ({
  id,
  thumbnail,
  title,
  authors,
  bookReviewsArray = [],
  onFormSubmit,
  currentUser,
  onEditList,
  onDeleteBook
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

  const bookRatingsArray = bookReviewsArray.map((review) => review.rating);

  let total = 0;
  for (let i = 0; i < bookRatingsArray.length; i++) {
    total += bookRatingsArray[i];
  }

  const averageRating = bookRatingsArray.length
    ? (total / bookRatingsArray.length).toFixed(1)
    : 4;

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
            <button className="ui right floated button" onClick={(event)=>onDeleteBook(id)}>Delete</button>
            <div className="ui compact menu">
              <div className="ui simple dropdown item">
                Edit List
                <i className="dropdown icon"></i>
                <div className="menu">
                  <div className="item" onClick={(event)=>onEditList('Want to Read', id)}>
                    Want to Read
                  </div>
                  <div className="item" onClick={(event)=>onEditList('Reading', id)}>
                    Reading
                  </div>
                  <div className="item" onClick={(event)=>onEditList('Completed', id)}>
                    Completed
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui left floated button"
              onClick={(event)=>setIsFormShown(true)}
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
      {isFormShown && (
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <label>Rating</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" checked="checked" value={1} onChange={(event)=>setRating(event.target.value)}/>
                <label>1</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" value={2} onChange={(event)=>setRating(event.target.value)}/>
                <label>2</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" value={3} onChange={(event)=>setRating(event.target.value)}/>
                <label>3</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" value={4} onChange={(event)=>setRating(event.target.value)}/>
                <label>4</label>
              </div>
            </div>
          </div>
          <div className="field">
            <label>Review</label>
            <input
              type="text"
              name="review"
              placeholder="Review"
              value={review}
              onChange={(event)=>setReview(event.target.value)}
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
