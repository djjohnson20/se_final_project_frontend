import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  handleLoginClick,
  isLoggedIn,
  currentUser,
  handleLogOut,
  keyword,
  setKeyword,
  errorMessage,
  handleSubmit,
  savedArticles,
}) {
  const location = useLocation();

  const keywords =
    location.pathname === "/saved-news"
      ? [...new Set(savedArticles.map((article) => article.keyword))]
      : [];

  const headerClasses = [
    "header",
    location.pathname === "/saved-news" ? "header--white" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerLogoClasses = [
    "header__logo",
    location.pathname === "/saved-news" ? "header__logo--white" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const articleContent =
    location.pathname === "/saved-news" ? (
      <div className="saved__content">
        <p className="saved__title">Saved articles</p>
        <h2 className="saved__articles">
          {currentUser}, you have {savedArticles.length} saved article
          {savedArticles.length !== 1 ? "s" : ""}
        </h2>
        <p className="saved__keywords">
          By keywords: <span className="keywords">{keywords.join(", ")}</span>
        </p>
      </div>
    ) : (
      <SearchForm
        keyword={keyword}
        setKeyword={setKeyword}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
      />
    );
  return (
    <header className={headerClasses}>
      <div className="header__controls">
        <Link className={headerLogoClasses} to="/">
          NewsExplorer
        </Link>
        <Navigation
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          handleLogOut={handleLogOut}
        />
      </div>
      {articleContent}
    </header>
  );
}

export default Header;
