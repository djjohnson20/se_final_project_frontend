import { Link } from "react-router-dom";

import "./Footer.css";
import Facebook from "../../assets/fb.png";
import GitHub from "../../assets/github.png";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; 2025 Supersite, Powered by News API
      </p>
      <div className="footer__links">
        <Link className="footer__home" to="/">
          Home
        </Link>
        <a
          href="https://tripleten.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__tripleten"
        >
          TripleTen
        </a>
      </div>
      <div className="footer__social">
        <a
          href="https://github.com/djjohnson20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="github" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
