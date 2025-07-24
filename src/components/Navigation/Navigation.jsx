import { Link, useLocation } from "react-router-dom";

import "./Navigation.css";
import LogoutBtn from "../../assets/logout.png";
import LogoutBtnDark from "../../assets/logoutdark.png";

function Navigation({
  handleLoginClick,
  isLoggedIn,
  currentUser,
  handleLogOut,
}) {
  const location = useLocation();

  const navClasses = [
    "nav__link",
    location.pathname === "/saved-articles" ? "nav__link--white" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const navBtnClasses = [
    "nav__sign-in",
    location.pathname === "/saved-articles" ? "nav__sign-in--white" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const navLogoutImage =
    location.pathname === "/saved-articles" ? LogoutBtnDark : LogoutBtn;

  return !isLoggedIn ? (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <Link className={navClasses} to="/">
            Home
          </Link>
        </ul>
        <button onClick={handleLoginClick} className="nav__sign-in">
          Sign In
        </button>
      </nav>
    </>
  ) : (
    <nav className="nav">
      <ul className="nav__links">
        <Link className={navClasses} to="/">
          Home
        </Link>
        <Link className={navClasses} to="/saved-articles">
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
