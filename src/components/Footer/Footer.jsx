import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; 2025 Supersite, Powered by News API
      </p>
      <div className="footer__links">
        <Link>Home</Link>
        <Link>TripleTen</Link>
        <img src="" alt="" className="footer__github" />
        <img src="" alt="" className="footer__facebook" />
      </div>
    </div>
  );
}

export default Footer;
