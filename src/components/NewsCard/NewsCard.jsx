import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <li className="card">
      <div className="card__name-container">
        <img src={article.urlToImage} alt="puppy" className="card__image" />
        <p className="card__date">{article.publishedAt}</p>
        <h2 className="card__title">{article.title}</h2>
        <p className="card__content">{article.content}</p>
        <p className="card__description">{article.description}</p>
      </div>
    </li>
  );
}

export default NewsCard;
