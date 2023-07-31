import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <Logo className="header-logo" />
        </Link>
        <Link to="/articles">Recent Articles</Link>
        <Link to="/about">About</Link>
      </nav>
      <Link to="/login">Log in</Link>
    </header>
  );
};

export default Header;
