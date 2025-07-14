import { useState } from "react";

import NewsCardList from "../NewsCardList/NewsCardList";
import { newsArticles } from "../../utils/constants";
import "./Main.css";

function Main() {
  const [newsItems, setNewsItems] = useState(newsArticles);

  return (
    <div className="main">
      <NewsCardList newsItems={newsItems} />
    </div>
  );
}

export default Main;
