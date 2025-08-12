import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({
  newsItems,
  isLoggedIn,
  savedArticles,
  onToggleSave,
  isSavedNewsPage,
}) {
  return (
    <div className="main">
      <NewsCardList
        newsItems={newsItems}
        isLoggedIn={isLoggedIn}
        savedArticles={savedArticles}
        onToggleSave={onToggleSave}
        isSavedNewsPage={isSavedNewsPage}
      />
    </div>
  );
}

export default Main;
