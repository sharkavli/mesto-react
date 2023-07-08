import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Card from './Card.js';
import ProfileLoader from './ProfileLoader.js';
import Loading from './Loading.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      {props.isloadingPage ? (
        <ProfileLoader />
      ) : (
        <section className="profile">
          <button onClick={props.onEditAvatar} className="profile__edit-avatar">
            <img
              src={currentUser.avatar}
              alt="аватар"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__work">{currentUser.about}</p>
            <button
              onClick={props.onEditProfile}
              type="button"
              className="profile__edit-button"
            ></button>
          </div>
          <button
            onClick={props.onAddPlace}
            type="button"
            className="profile__add-button"
          ></button>
        </section>
      )}
      {props.isloadingPage ? (
        <Loading />
      ) : (
        <section className="elements">
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardLike={props.onCardLike}
              onCardClick={props.onCardClick}
              onCardDelete={props.onCardDelete}
              onDeletePopup={props.onDeletePopup}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Main;
