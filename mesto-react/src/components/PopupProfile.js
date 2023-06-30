import PopupWithForm from './PopupWithForm.js';

function PopupProfile(props) {
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="Profile"
      title="Редактировать профиль"
    >
      <input
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

export default PopupProfile;
