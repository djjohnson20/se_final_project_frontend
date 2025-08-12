import { useLocation } from "react-router-dom";
import { useState } from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  newsItems,
  isLoggedIn,
  savedArticles = [],
  onToggleSave,
  isSavedNewsPage,
}) {
  const location = useLocation();
  const [visibleCount, setVisibleCount] = useState(3);

  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  const searchResults = [
    "newscard__list-title",
    location.pathname === "/saved-news" ? "newscard__list-title-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const savedNewsList = [
    "newscard__list",
    location.pathname === "/saved-news" ? "newscard__list-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleShowMore = () => {
    setVisibleCount((prev) => {
      const newCount = prev + 3;
      return newCount >= (newsItems?.length || 0)
        ? newsItems?.length || 0
        : newCount;
    });
  };

  const visibleArticles = isSavedNewsPage
    ? newsItems
    : newsItems.slice(0, visibleCount);

  const hasMore = !isSavedNewsPage && visibleCount < newsItems.length;

  return (
    <div className={savedNewsList}>
      <h1 className={searchResults}>Search Results</h1>

      <div className="newscards">
        {visibleArticles.map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            isLoggedIn={isLoggedIn}
            isSaved={isArticleSaved(article)}
            onToggleSave={onToggleSave}
            isSavedNewsPage={isSavedNewsPage}
          />
        ))}
      </div>

      {(newsItems || []).length > 3 && hasMore && (
        <button
          className="newscard__show-more"
          onClick={handleShowMore}
        ></button>
      )}
    </div>
  );
}

export default NewsCardList;
