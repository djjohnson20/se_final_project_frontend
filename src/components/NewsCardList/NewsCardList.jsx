import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsItems }) {
  return (
    <div className="newscard__list">
      <h1 className="newscard__list-title">Search Results</h1>
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
