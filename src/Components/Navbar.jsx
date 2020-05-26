import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Headers>
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </Headers>
  );
};

export default Navbar;

const Headers = styled.header`
  nav {
    background-color: #282828;
    text-align: right;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10000;
    cursor: default;
    height: 3.5em;
    line-height: 3.5em;
    display: flex;
    justify-content: space-between;
  }

  nav a {
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
    position: relative;
    color: #fff;
    text-decoration: none;
    outline: 0;
    font-weight: 600;
    border-radius: 8px;
    height: 2.5em;
    line-height: 2.5em;
    padding: 0 1.25em;
  }

  nav a:hover {
    color: #fff !important;
    background: #696969;
    padding-bottom: 5px;
    padding-top: 4px;
  }

  nav a.active:before {
    content: "";
    display: block;
    position: absolute;
    bottom: -0.6em;
    left: 50%;
    margin-left: -0.75em;
    border-left: solid 0.75em transparent;
    border-right: solid 0.75em transparent;
    border-top: solid 0.6em #282828;
  }

  @media only screen and (max-width: 490px){
    nav {
      display: none;
    }
  }
`;
