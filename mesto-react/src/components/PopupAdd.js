import PopupWithForm from './PopupWithForm.js';

function PopupAdd(props) {
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="Add"
      title="Новое место"
    >
      <input
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
        required
        id="inputLink"
        name="link"
        className="popup__input"
        type="url"
        placeholder="Ссылка на картинку"
      />
      <span id="inputLink-error" className="popup__error-message"></span>
      <button type="submit" className="popup__save">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default PopupAdd;
