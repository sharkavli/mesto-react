function DeletePopup(props) {
    

  return (
    <div className="popup">
      <div class="popup__container popup__delete-container">
        <div class="popup__close" id="closeDelete"></div>
        <p class="popup__delete-question">Вы уверены?</p>
        <button type="submit" class="popup__save popup__save-delete">
          Да
        </button>
      </div>
    </div>
  );
}
