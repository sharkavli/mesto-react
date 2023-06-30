import likeIcon from '../images/like.svg';

function Cards(props) {
  function handleClick() {
    props.onCardClick(props.name, props.link);
  }

  return (
    <div className="element">
      <button type="button" className="element__delete" id="deleteEl"></button>
      <img
        onClick={handleClick}
        src={props.link}
        alt="Фото"
        className="element__photo"
      />
      <div className="element__panel">
        <h2 className="element__name">{props.name}</h2>
        <button type="button" className="element__set-like">
          <img src={likeIcon} alt="Нравится" className="element__like" />
          <p className="element__like-count">{props.likes}</p>
        </button>
      </div>
    </div>
  );
}

export default Cards;
