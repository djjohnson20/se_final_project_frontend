import { useLocation } from "react-router-dom";
import { useState } from "react";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsItems }) {
  const location = useLocation();
  const [visibleCount, setVisibleCount] = useState(3);

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
    setVisibleCount((newsItems || []).length);
  };

  const visibleArticles = (newsItems || []).slice(0, visibleCount);

  return (
    <div className={savedNewsList}>
      <h1 className={searchResults}>Search Results</h1>

      <div className="newscards">
        {visibleArticles.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>

      {(newsItems || []).length > 3 &&
        visibleCount < (newsItems || []).length && (
          <button
            className="newscard__show-more"
            onClick={handleShowMore}
          ></button>
        )}
    </div>
  );
}

export default NewsCardList;
