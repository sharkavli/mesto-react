import PopupWithForm from './PopupWithForm.js';
import React from 'react';

function AddPlacePopup(props) {
  const [name, setName] = React.useState();
  const [link, setLink] = React.useState();

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="Add"
      title="Новое место"
    >
      <input
        value={name || ''}
        onChange={(evt) => setName(evt.target.value)}
        required
        minLength="2"
        maxLength="30"
        id="inputTitle"
        name="name"
        className="popup__input"
        type="text"
        placeholder="Название"
      />
      <span id="inputTitle-error" className="popup__error-message"></span>
      <input
        value={link || ''}
        onChange={(evt) => setLink(evt.target.value)}
        required
        id="inputLink"
        name="link"
        className="popup__input"
        type="url"
        placeholder="Ссылка на картинку"
      />
      <span id="inputLink-error" className="popup__error-message"></span>
      <button onSubmit={handleSubmit} type="submit" className="popup__save">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
