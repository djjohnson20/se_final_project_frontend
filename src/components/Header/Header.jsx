import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header() {
  return (
    <header className="header">
      <div className="header__controls">
        <Link to="/">
          <p className="header__logo">NewsExplorer</p>
        </Link>
        <Navigation />
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
