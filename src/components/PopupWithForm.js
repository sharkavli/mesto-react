function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? 'popup_opened' : ''}`}
      id={`popup${props.name}`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close"
        ></button>
        <h2 className="popup__info">{props.title}</h2>
        <form
          onSubmit={props.onSubmit}
          noValidate
          className="popup__form"
          name={props.name}
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
