import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation({ handleLoginClick }) {
  return (
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
  );
}

export default Navigation;
