function ImagePopup(props) {
  let { name, link } = props.card;
  return (
    <div className={`popup ${name ? 'popup_opened' : ''}`} id="popupImg">
      <div className="popup__photo-container">
        <div
          onClick={props.onClose}
          className="popup__close"
          id="closeImg"
        ></div>
        <img alt={name} src={link} className="popup__image" />
        <p className="popup__text">{name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
