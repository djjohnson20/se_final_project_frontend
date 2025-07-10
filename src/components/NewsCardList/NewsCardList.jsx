import "./NewsCardList.css";
import { newsArticles } from "../../utils/constants";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <div className="newscard__list">
      <h1 className="newscard__list-title">Search Results</h1>
      <NewsCard article={newsArticles[0]} />
    </div>
  );
}

export default NewsCardList;
