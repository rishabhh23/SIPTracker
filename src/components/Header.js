import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
import { Link } from "react-router-dom";

const Header = ({ name }) => {
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-5xl">{name}</h1>
        <Search />
      </div>
      <nav className="items-center text-2xl">
        <div>
          <Link to="/login">Login/</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
      <ThemeIcon />
    </>
  );
};

export default Header;
