import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleLoginClick, isLoggedIn, currentUser, handleLogOut }) {
  return (
    <header className="header">
      <div className="header__controls">
        <Link className="header__logo" to="/">
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
