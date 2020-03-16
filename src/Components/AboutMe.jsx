import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import selfPix from "./images/blinx-2.jpg";
import Footer from "./FooterNav";

const AboutMe = () => {
  return (
    <StyledContainer>
      <div className="animated animatedFadeInUp fadeInUp">
        <h1>About Me</h1>
        <StyledDiv>
          <div className="styled-para">
            <p>
              I had my first real exposure to how Information Technology works
              about a year and six months ago, and it was a life defining moment
              for me. At first, I explored Computer Networking and some aspects
              of Network Security, within which period I also got introduced to
              Web Development. Here, I knew I had found my path and began some
              self-study sessions. By August 2019, I quit all else (which
              included my Maintenance Supervisor job as a Mechanical Engineer)
              and joined Lambda School as a Full Stack Web Development student.
            </p>
            <p>
              To this very day my love for coding has never wavered, thus while
              learning every day I developed great interpersonal skills as well
              as skills required of a Software Engineer, be it the Front-End or
              Back-End/Database Management. My goal is to contribute towards
              making life easier using smart technology.
            </p>
            <p>
              When I am not working on a project, I am either volunteering,
              spending time with family and friends or playing board games.
            </p>
            <ButtonDiv>
              <Link to="/project">
                <span className="hvr-radial-out">Check My Projects</span>
              </Link>
              <Link to="/contact">
                <span className="hvr-radial-out">Contact Me</span>
              </Link>
            </ButtonDiv>
          </div>
          <AboutPix>
            <img src={selfPix} alt="My Profile Pix" id="self-img" />
          </AboutPix>
        </StyledDiv>
      </div>
      <Footer />
    </StyledContainer>
  );
};
export default AboutMe;

const StyledContainer = styled.div`
  margin-bottom: 25%;
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
    animation-duration: 0.9s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.9s;
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

  h1 {
    margin-top: 5%;
    margin-left: 10px;
    font-size: 25px;
    text-align: left;
    margin-bottom: 3px;
    text-shadow: 1px 1px 1px #a9a9a9, 3px 3px 2px darkgray;
  }

  @media only screen and (max-width: 1105px){
    h1{
      margin-top: 6.5%;
    }
  } 

  @media only screen and (max-width: 762px){
    h1{
      margin-top: 8%;
    }
  } 

  @media only screen and (max-width: 650px){
    h1{
      margin-top: 10%;
    }
  } 

  @media only screen and (max-width: 533px){
    h1{
      margin-top: 15%;
    }
  } 

  @media only screen and (max-width: 490px){
    h1{
      margin-top: 8%;
    }
`;
const StyledDiv = styled.div`
  margin: 1.5% 1%;
  line-height: 1.6;
  display: flex;
  justify-content: space-between;

  .styled-para{
    width: 55%;
    padding: 2px 10px;
    border: #D3D3D3 0.5px solid;
    border-radius: 10px;
  }

  @media only screen and (max-width: 700px){
    flex-direction: column-reverse;

    .styled-para{
      width: 92.5%;
      margin-top: 20px;
    }
  }
`;

const AboutPix = styled.p`
  width: 43%;
  margin: 5px;
  text-align: center;

  img {
    border-radius: 20px;
    width: 280px;
  }

  @media only screen and (max-width: 700px){
    width: 95%;
    margin: 5px;
    text-align: right;
  }

  @media only screen and (max-width: 700px){
    img {
      width: 220px;
    }
  }
`;

const ButtonDiv = styled.div`
span {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  color: black;
  margin: 10px 15px 15px 0px;
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
