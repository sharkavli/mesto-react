import PopupWithForm from './PopupWithForm';

function PopupAvatar(props) {
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="EditAvatar"
      title="Обновить аватар"
    >
      <input
        required
        id="inputAvatarLink"
        name="link"
        className="popup__input"
        type="url"
        placeholder="Ссылка на картинку"
      />
      <span id="inputAvatarLink-error" className="popup__error-message"></span>
      <button type="submit" className="popup__save popup__save-avatar">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default PopupAvatar;
