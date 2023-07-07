import spinner from '../images/Spinner.svg';

export default function Loading() {
  return (
    <div className="loading">
      <img alt="Загрузка" className="loading__spinner" src={spinner} />
    </div>
  );
}
