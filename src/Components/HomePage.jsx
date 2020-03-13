/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import selfPix from "./images/pic00.jpg";

const Home = () => {
  return (
    <HomeDiv>
      <div className="animated animatedFadeInUp fadeInUp">
        <HomeDisplay>
          <div className="self">
            <img src={selfPix} alt="My Profile Pix" id="self-img" />
          </div>
          <div className="intro">
            <header>
              <h1>Hello, I am Martins Onyedikachi.</h1>
            </header>
            <p>A Software Engineer who is in love with technology</p>
            <div>
              <AboutDiv>
                <Link to="/about">
                  <span className="hvr-radial-out">About Me</span>
                </Link>
              </AboutDiv>
            </div>
            <Socials />
          </div>
        </HomeDisplay>
      </div>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  @keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  .animated {
    animation-duration: 0.7s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.7s;
    -webkit-animation-fill-mode: both;
  }

  .animatedFadeInUp {
    opacity: 0;
  }

  .fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
  }
`;

const HomeDisplay = styled.div`
  display: flex;
  margin: 5% auto;
  text-align: center;
  max-width: calc(100%-50px);
  width: 97%;
  padding-bottom: 20px;
  padding-top: 10%;

  .self {
    width: 45%;
    margin-top: 3%;
    img {
      border-radius: 50%;
      width: 260px;
    }
    @media only screen and (max-width: 750px){
      img{
        width: 220px;
      }
    }
    @media only screen and (max-width: 500px){
      img{
        width: 190px;
      }
    }
  }

  .intro {
    width: 47%;
    margin-top: 3%;
  }
  p {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 850px){
    margin-top: 10%;
  }

  @media only screen and (max-width: 600px){
    flex-direction: column;
    
  .intro {
    width: 95%;
  }

  .self {
    width: 95%;
  }
  }
`;

const AboutDiv = styled.h3`
  margin-top: 20px;
  margin-bottom: 40px;
  a {
    text-decoration: none;
    color: black;
  }
  span {
    padding: 10px 10px;
    cursor: pointer;
    border-radius: 10px;
  }

  .hvr-radial-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    background: #e1e1e1;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-radial-out:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098d1;
    border-radius: 100%;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-radial-out:hover,
  .hvr-radial-out:focus,
  .hvr-radial-out:active {
    color: white;
  }
  .hvr-radial-out:hover:before,
  .hvr-radial-out:focus:before,
  .hvr-radial-out:active:before {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
`;
