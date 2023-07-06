import likeIcon from '../images/like.svg';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = props.ownerId === currentUser._id;
  const isLiked = props.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked && 'element__like_active'
  }`;

  function handleClick() {
    props.onCardClick(props.name, props.link);
  }

  function handleLikeClick() {
    props.onCardLike(props, currentUser);
  }

  return (
    <div className="element">
      {isOwner && (
        <button type="button" className="element__delete" id="deleteEl" />
      )}
      <img
        onClick={handleClick}
        src={props.link}
        alt="Фото"
        className="element__photo"
      />
      <div className="element__panel">
        <h2 className="element__name">{props.name}</h2>
        <button type="button" className="element__set-like">
          <img
            onClick={handleLikeClick}
            src={likeIcon}
            alt="Нравится"
            className={cardLikeButtonClassName}
          />
          <p className="element__like-count">{props.likes.length}</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
