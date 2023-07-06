import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React, { useState } from 'react';
import PopupAvatar from './PopupAvatar.js';
import PopupProfile from './PopupProfile.js';
import PopupAdd from './PopupAdd.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  React.useEffect(() => {
    api.getProfileInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleCardLike(card, user) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === user._id);
    console.log(isLiked);
    console.log(user);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.toggleLike(card.id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => (c.id === card.id ? newCard : c)));
    });
  }

  function handleCardClick(name, link) {
    setSelectedCard({ name, link });
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <div className="page__container">
            <Header />
            <Main
              setCards={setCards}
              cards={cards}
              onCardLike={handleCardLike}
              onCardClick={handleCardClick}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
            />
            <Footer />
            <PopupAvatar
              onClose={closeAllPopups}
              isOpen={isEditAvatarPopupOpen}
            />
            <PopupProfile
              onClose={closeAllPopups}
              isOpen={isEditProfilePopupOpen}
            />
            <PopupAdd onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
