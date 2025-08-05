import { useLocation } from "react-router-dom";

import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsItems }) {
  const location = useLocation();

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

  return (
    <div className={savedNewsList}>
      <h1 className={searchResults}>Search Results</h1>
      <div className="newscards">
        {newsItems.map((article) => {
          return <NewsCard key={article.url} article={article} />;
        })}
      </div>
      <button className="newscard__show-more"></button>
    </div>
  );
}

export default NewsCardList;
