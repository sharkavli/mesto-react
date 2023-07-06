import React, { useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getCardsInfo().then((res) => {
      const cardsFromApi = res.map((item) => ({
        id: item._id,
        ownerId: item.owner._id,
        link: item.link,
        name: item.name,
        likes: item.likes,
        onCardClick: props.onCardClick,
        onCardLike: props.onCardLike,
      }));

      props.setCards(cardsFromApi);
    });
  }, []);

  return (
    <>
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
      <section className="elements">
        {props.cards.map(({ id, ...props }) => (
          <CurrentUserContext.Provider key={id} value={currentUser}>
            <Card
              id={id}
              onCardLike={props.onCardLike}
              onCardClick={props.onCardClick}
              {...props}
            />
          </CurrentUserContext.Provider>
        ))}
      </section>
    </>
  );
}

export default Main;
