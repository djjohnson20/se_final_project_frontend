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
}) {
  const location = useLocation();

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
        <h2 className="saved__articles">Elise, you have 3 saved articles</h2>
        <p className="saved__keywords">
          By keywords: <span className="keywords">puppies, tech</span>
        </p>
      </div>
    ) : (
      <SearchForm keyword={keyword} setKeyword={setKeyword} />
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
