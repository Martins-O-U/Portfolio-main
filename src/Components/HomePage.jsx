/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import selfPix from "./images/blinx-3.jpg";
import img from "../Components/images/bg.png";

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
              <h1 id="H1-name2">Hello there,</h1>
              <h1 id="H1-name" className="animated fadeInRight">I am Martins Onyedikachi.</h1>
            </header>
            <p className="animated bounceInUp">A Software Engineer who is in love with technology</p>
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
  max-width: 1200px;
  width: 97%;
  padding-bottom: 20px;
  padding-top: 10%;

  #H1-name{
    margin-top: -5px;
  }
  #H1-name2{
    margin-bottom: 3px;
  }
  @-webkit-keyframes fadeInRight {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
    animation-duration: 1.5s;
    animation-delay: 0.5s;
  }
  
  @-webkit-keyframes fadeInRightBig {
    from {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInRightBig {
    from {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .fadeInRightBig {
    -webkit-animation-name: fadeInRightBig;
    animation-name: fadeInRightBig;
    animation-duration: 1.5s;
    animation-delay: 0.5s;
  }

  @-webkit-keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
  
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
  
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
  
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
  
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
    animation-duration: 1s;
    animation-delay: 1.2s;
  }
  
  .self {
    width: 45%;
    margin-top: 3%;
    img {
      border-radius: 50%;
      border: 5px solid #F4A460;
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
    background-image: url(${img});
    background-color: #FFF8DC;
    border-radius: 30px;
    padding-bottom: 15px;
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
    margin-left: 10px;
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
    border: 1px solid #2098d1;
  }

  .hvr-radial-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    // background: #F8F8FF;
    background: #FFF8DC;
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
