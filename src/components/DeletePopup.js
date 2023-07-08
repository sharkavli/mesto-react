export default function DeletePopup(props) {
  function handleDeleteClick() {
    props.onCardDelete(props.cardId);
  }

  return (
    <div className={`popup ${props.cardId ? `popup_opened` : ''}`}>
      <div className="popup__container popup__delete-container">
        <div className="popup__close" id="closeDelete"></div>
        <p className="popup__delete-question">Вы уверены?</p>
        <button
          onClick={handleDeleteClick}
          type="submit"
          className="popup__save popup__save-delete"
        >
          Да
        </button>
      </div>
    </div>
  );
}
