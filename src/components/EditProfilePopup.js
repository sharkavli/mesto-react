import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({ name, about: description });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onUpdateUser={props.onUpdateUser}
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="Profile"
      title="Редактировать профиль"
    >
      <input
        value={name || ''}
        onChange={(event) => setName(event.target.value)}
        required
        minLength="2"
        maxLength="40"
        id="inputName"
        name="name"
        className="popup__input"
        placeholder="Имя"
      />
      <span id="inputTitle-error" className="popup__error-message"></span>
      <input
        value={description || ''}
        onChange={(event) => setDescription(event.target.value)}
        required
        minLength="2"
        maxLength="200"
        id="inputWork"
        name="about"
        className="popup__input"
        placeholder="Род деятельности"
      />
      <span id="inputLink-error" className="popup__error-message"></span>
      <button type="submit" className="popup__save">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
