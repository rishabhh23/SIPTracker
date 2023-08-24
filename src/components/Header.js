import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = ({ name }) => {
  return (
    <div className="flex justify-between itemes-center px-4 py-2">
      <div className="xl:px-32">
        <h1 className="text-5xl">{name}</h1>
        <Search />
      </div>
      <div className="flex items-center ml-auto">
        <Logout />
        <ThemeIcon />
      </div>
    </div>
  );
};

export default Header;
