function ImagePopup(props) {
  const { name, link } = props.card;
  return (
    <div
      className={`popup popup__image ${name ? 'popup_opened' : ''}`}
      id="popupImg"
    >
      <div className="popup__photo-container">
        <div
          onClick={props.onClose}
          className="popup__close"
          id="closeImg"
        ></div>
        <img alt={name} src={link} className="popup__picture" />
        <p className="popup__text">{name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
