import React from "react";

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        <img alt="youtube logo" src="/yt_logo.png"></img>
      </a>
      <a href="/" className="active item">
        <i className="home icon"></i>
      </a>
      <a href="/" className="item">
        <i className="upload icon"></i>
      </a>
      <a href="/" className="item">
        <i className="video icon"></i>
      </a>
      <div className="right menu">
        <a href="/" className="ui item">
          Sign Up
        </a>
        <a href="/" className="ui item">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
