import { Link, useLocation } from "react-router-dom";

import "./Navigation.css";
import LogoutBtn from "../../assets/logout.svg";
import LogoutBtnDark from "../../assets/logoutdark.svg";

function Navigation({
  handleLoginClick,
  isLoggedIn,
  currentUser,
  handleLogOut,
  closeMenu,
}) {
  const location = useLocation();

  const homeClasses = [
    "nav__link",
    location.pathname === "/saved-news" ? "nav__link--white" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const savedArticlesClasses = [
    "nav__link",
    location.pathname === "/saved-news" ? "nav__link--white" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const navBtnClasses = [
    "nav__sign-in",
    location.pathname === "/saved-news" ? "nav__sign-in--white" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const navLogoutImage = closeMenu
    ? LogoutBtn
    : location.pathname === "/saved-news"
    ? LogoutBtnDark
    : LogoutBtn;

  return !isLoggedIn ? (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <Link className={homeClasses} to="/">
            Home
          </Link>
        </ul>
        <button
          onClick={() => {
            if (closeMenu) closeMenu();
            handleLoginClick();
          }}
          className="nav__sign-in"
        >
          Sign In
        </button>
      </nav>
    </>
  ) : (
    <nav className="nav">
      <ul className="nav__links">
        <Link
          className={homeClasses}
          to="/"
          onClick={() => {
            if (closeMenu) closeMenu();
          }}
        >
          Home
        </Link>
        <Link
          className={savedArticlesClasses}
          to="/saved-news"
          onClick={() => {
            if (closeMenu) closeMenu();
          }}
        >
          Saved Articles
        </Link>
      </ul>
      <button onClick={handleLogOut} className={navBtnClasses}>
        {currentUser}{" "}
        <img
          className="nav__logout-btn"
          src={navLogoutImage}
          alt="log out button"
        />
      </button>
    </nav>
  );
}

export default Navigation;
