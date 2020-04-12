import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";
import lambdaDoor from "./images/LambdaDoor.png";
import localPark from "./images/Local-Park.png";
import refugeeStories from "./images/Refugee-stories.png";
import reunite from "./images/Reunite.png";
import Footer from "./FooterNav";

function Projects() {
  return (
    <StyledDiv>
      <h1 className="animated animatedFadeInUp fadeInUp">PROJECTS</h1>
      <div className="grid-view animated animatedFadeInUp fadeInUp">
        <div className="card">
          <Card>
            <CardImg
              className="cardImg"
              top
              width="100%"
              src={lambdaDoor}
              alt="Card image cap"
            />
            <CardBody>
              <div className="card-content">
                <CardTitle>
                  <strong>LambdaDoor</strong>
                </CardTitle>
                <Link to={`/singleProject/3`}>
                  <span className="hvr-radial-out">About Project</span>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="card">
          <Card>
            <CardImg
              className="cardImg"
              top
              width="100%"
              src={refugeeStories}
              alt="Card image cap"
            />
            <CardBody>
              <div className="card-content">
                <CardTitle>
                  <strong>Refugee Stories</strong>
                </CardTitle>
                <Link to={`/singleProject/1`}>
                  <span className="hvr-radial-out">About Project</span>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="card">
          <Card>
            <CardImg
              className="cardImg"
              top
              width="100%"
              src={localPark}
              alt="Card image cap"
            />
            <CardBody>
              <div className="card-content">
                <CardTitle>
                  <strong>Local-Park-Passport</strong>
                </CardTitle>
                <Link to={`/singleProject/2`}>
                  <span className="hvr-radial-out">About Project</span>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="card">
          <Card>
            <CardImg
              className="cardImg"
              top
              width="100%"
              src={reunite}
              alt="Card image cap"
            />
            <CardBody>
              <div className="card-content">
                <CardTitle>
                  <strong>Reunite</strong>
                </CardTitle>
                <Link to={`/singleProject/4`}>
                  <span className="hvr-radial-out">About Project</span>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </StyledDiv>
  );
}

export default Projects;

const StyledDiv = styled.div`
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
    margin-top: 4.5%;
    font-size: 25px;
    text-align: center;
    margin-bottom: 3px;
    text-shadow: 1px 1px 1px #a9a9a9, 3px 3px 2px darkgray;
  }

  span {
    padding: 4px 5px;
    cursor: pointer;
    border: 1px solid #2098d1;
    border-radius: 10px;
    margin-bottom: 5px;
    color: #2098d1;
  }

  .hvr-radial-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    /* background: #e1e1e1; */
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
