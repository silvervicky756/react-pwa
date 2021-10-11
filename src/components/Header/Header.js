import React from "react";
import logo from "../../logo.svg";
import "./Header.css";
import Link from "../Link/Link";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link />
    </header>
  );
};

export default Header;
