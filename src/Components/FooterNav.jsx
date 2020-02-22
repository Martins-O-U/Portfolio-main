import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Socials from "./Socials";

export default function Footer() {
  return (
    <StyledDiv>
      <div className="ContHome">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
      <div className="copy-right">
        <p>&copy; 2020 Martins O-U</p>
      </div>
      <div className="social-handle">
        <Socials />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  padding: 3px 5px;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: baseline;

  .ContHome {
    display: flex;
    justify-content: space-evenly;
    a {
      margin-right: 12px;
      margin-left: 12px;
      text-decoration: none;
      color: black;
      transition: transform 250ms;
      display: inline-block;
      font-size: 17px;
    }
    a:hover {
      color: #2098d1;
      transform: translateY(-3px);
    }
  }
`;
