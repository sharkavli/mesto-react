import React, { useState } from 'react';
import { api } from '../utils/api.js';
import Cards from './Cards.js';

function Main(props) {
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getProfileInfo().then((res) => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    });
  }, []);

  React.useEffect(() => {
    api.getCardsInfo().then((res) => {
      const cardsFromApi = res.map((item) => ({
        id: item._id,
        link: item.link,
        name: item.name,
        likes: item.likes.length,
        onCardClick: props.onCardClick,
      }));

      setCards(cardsFromApi);
    });
  }, []);

  return (
    <>
      <section className="profile">
        <button onClick={props.onEditAvatar} className="profile__edit-avatar">
          <img src={userAvatar} alt="аватар" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__work">{userDescription}</p>
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
        {cards.map(({ id, ...props }) => (
          <Cards onCardClick={props.onCardClick} key={id} {...props} />
        ))}
      </section>
    </>
  );
}

export default Main;
