import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleLoginClick, isLoggedIn, currentUser, handleLogOut }) {
  const location = useLocation();

  const headerClasses = [
    "header",
    location.pathname === "/saved-articles" ? "header--white" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerLogoClasses = [
    "header__logo",
    location.pathname === "/saved-articles" ? "header__logo--white" : "",
  ]
    .filter(Boolean)
    .join(" ");
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
      <SearchForm />
    </header>
  );
}

export default Header;
