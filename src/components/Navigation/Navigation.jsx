import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <Link to="/">
          <li className="nav__link">Home</li>
        </Link>
      </ul>
      <button className="nav__sign-in">Sign In</button>
    </nav>
  );
}

export default Navigation;
