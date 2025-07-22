import { Link } from "react-router-dom";

import "./Navigation.css";
import LogoutBtn from "../../assets/logout.png";

function Navigation({
  handleLoginClick,
  isLoggedIn,
  currentUser,
  handleLogOut,
}) {
  return !isLoggedIn ? (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <Link className="nav__link" to="/">
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
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/saved-articles">
          Saved Articles
        </Link>
      </ul>
      <button onClick={handleLogOut} className="nav__sign-in">
        {currentUser}{" "}
        <img className="nav__logout-btn" src={LogoutBtn} alt="log out button" />
      </button>
    </nav>
  );
}

export default Navigation;
