import PopupWithForm from './PopupWithForm';
import React, { useRef } from 'react';

function EditAvatarPopup(props) {
  let avatarInput = useRef('');

  React.useEffect(() => {
    avatarInput.current.value = '';
  }, [props.isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="EditAvatar"
      title="Обновить аватар"
    >
      <input
        ref={avatarInput}
        required
        name="link"
        className="popup__input"
        type="url"
        placeholder="Ссылка на картинку"
      />
      <span id="inputAvatarLink-error" className="popup__error-message"></span>
      <button
        onSubmit={handleSubmit}
        type="submit"
        className="popup__save popup__save-avatar"
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
