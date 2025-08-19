import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import menu from "../../assets/menu.svg";

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
  const [menuOpen, setMenuOpen] = useState(false);

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
          By keywords:{" "}
          <span className="keywords">
            {keywords.length <= 2
              ? keywords.join(", ")
              : `${keywords[0]}, ${keywords[1]}, and ${
                  keywords.length - 2
                } other${keywords.length - 2 > 1 ? "s" : ""}`}
          </span>
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

        <nav className="nav nav--desktop">
          <Navigation
            handleLoginClick={handleLoginClick}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            handleLogOut={handleLogOut}
          />
        </nav>

        <button
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img src={menu} alt="menu icon" />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="mobile-nav">
          <Navigation
            handleLoginClick={handleLoginClick}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            handleLogOut={handleLogOut}
            onNavigate={() => setMenuOpen(false)}
          />
        </div>
      )}

      {articleContent}
    </header>
  );
}

export default Header;
