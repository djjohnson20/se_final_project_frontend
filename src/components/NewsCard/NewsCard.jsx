import { useState } from "react";

import "./NewsCard.css";

import formatPublishedDate from "../../utils/dateformatter";

function NewsCard({ article, isLoggedIn, isSaved, onToggleSave }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <li className="card">
      <div className="card__name-container">
        <div className="card__like-wrapper">
          <button
            className={`card__like-btn ${
              isSaved ? "card__like-btn_saved" : ""
            }`}
            onClick={() => {
              onToggleSave(article);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Save article"
          ></button>

          {!isLoggedIn && showTooltip && (
            <div className="card__tooltip">Sign in to save articles</div>
          )}
        </div>

        <img src={article.urlToImage} alt="" className="card__image" />
        <p className="card__date">{formatPublishedDate(article.publishedAt)}</p>
        <h2 className="card__title">{article.title}</h2>
        <p className="card__content">{article.description}</p>
        <p className="card__description">{article.source.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;
