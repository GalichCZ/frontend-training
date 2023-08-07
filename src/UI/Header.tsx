import Logo from "./Logo";
import { Link } from "react-router-dom";
import useLoggedIn from "../hooks/useLoggedIn";
import UserHead from "./UserHead";

const Header = () => {
  const isLoggedIn = useLoggedIn();

  return (
    <header className="header">
      <nav>
        <Link to="/">
          <Logo className="header-logo" />
        </Link>
        <Link to="/articles">Recent Articles</Link>
        <Link to="/about">About</Link>
      </nav>
      {isLoggedIn ? <UserHead /> : <Link to="/login">Log in</Link>}
    </header>
  );
};

export default Header;
