import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { useState } from 'react';
import PopupAvatar from './PopupAvatar.js';
import PopupProfile from './PopupProfile.js';
import PopupAdd from './PopupAdd.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });

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
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
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
  );
}

export default App;
