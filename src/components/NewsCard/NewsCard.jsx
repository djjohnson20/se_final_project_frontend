import { useState } from "react";

import "./NewsCard.css";

import formatPublishedDate from "../../utils/dateformatter";

function NewsCard({
  article,
  isLoggedIn,
  isSaved,
  onToggleSave,
  isSavedNewsPage,
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  const tooltipText = !isLoggedIn
    ? "Sign in to save articles"
    : isSavedNewsPage
    ? "Remove from saved"
    : "";

  return (
    <li className="card">
      {isSavedNewsPage && article.keyword && (
        <div className="card__keyword-tooltip">{article.keyword}</div>
      )}
      <div className="card__name-container">
        <div className="card__like-wrapper">
          <button
            className={`card__like-btn ${
              isLoggedIn && isSaved && !isSavedNewsPage
                ? "card__like-btn_saved"
                : ""
            } ${isSavedNewsPage ? "card__delete-btn" : ""}`}
            onClick={() => {
              if (isLoggedIn) {
                onToggleSave(article);
              }
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Save article"
          ></button>

          {showTooltip && tooltipText && (
            <div className="card__tooltip">{tooltipText}</div>
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
