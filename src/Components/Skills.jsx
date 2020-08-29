import React from "react";
import styled from "styled-components";
import img from "../Components/images/bg.png";
import { } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import Footer from "./FooterNav";

const Skills = () => {
  return (
    <Container>
      <h1 className="animated animatedFadeInUp fadeInUp">What I do and use</h1>
      <StyledDiv>
        <div className="introDiv animated animatedFadeInUp fadeInUp">
          <h3>Full Stack Developer</h3>
          <div className='body-par'>
            <p>
              As a Full-Stack Web Application developer with a passion for web technologies,
              I strive to follow best practices and use industry-standard tools and methods
              such as Test Driven Development (using
              <span> Jest, React Testing Library and Supertest</span>), Continous
              Integration (using <span> Travis CI and Coveralls</span>), Linting (using
              <span> Eslint and Prettier</span>), Git-flow, etc.
          </p>
            <p>
              I have come to develop various technical skills such as
              programing with multiple languages and different frame works,
              debugging, project management, user research, database management,
              testing, deployment and much more.
          </p>
          </div>
        </div>
        <div className="toolsDiv animated animatedFadeInUp fadeInUp">
          <div className="toolsDivA skill">
            <div className="badge">
              <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="aaeb2f5c-a65b-4c09-b29d-d471acbf6b6b" data-share-badge-host="https://www.youracclaim.com"></div>
            </div>
            <div className="Techskill">
              <div>
                <h3>Frontend Development</h3>
                <ParagraghsDiv>
                  <p>React</p>
                  <p>Redux</p>
                  <p>Google Api</p>
                  <p>JavaScript</p>
                  <p>Zeit</p>
                  <p>Netlify</p>
                  <p>React Testing Library</p>
                  <p>Styled-Components</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </ParagraghsDiv>
              </div>
              <div>
                <h3>Backend Development</h3>
                <ParagraghsDiv>
                  <p>Node JS</p>
                  <p>Python</p>
                  <p>REST API</p>
                  <p>Express</p>
                  <p>PostgreSQL</p>
                  <p>SQLite</p>
                  <p>Heroku</p>
                  <p>MongoDB</p>
                </ParagraghsDiv>
              </div>
            </div>
          </div>
          <div className="toolsDivA">
            <h3>General Tools</h3>
            <ParagraghsDiv>
              <p>GitHub</p>
              <p>Jest</p>
              <p>Travis CI</p>
              <p>Coverals</p>
              <p>ES Lint</p>
              <p>Prettier</p>
              <p>Trello</p>
            </ParagraghsDiv>
          </div>
        </div>
      </StyledDiv>
      <Footer />
    </Container>
  );
};

export default Skills;

const Container = styled.div`
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
    text-shadow: 1px 1px 1px #a9a9a9, 3px 3px 0.5px darkgray;
  }

  @media only screen and (max-width: 1105px){
    h1{
      margin-top: 10%;
    }
  } 

  @media only screen and (max-width: 550px){
    h1{
      margin-top: 15%;
    }
  } 

  @media only screen and (max-width: 490px){
    h1{
      margin-top: 8%;
    }
  }

  .toolsDivA{
    background-image: url(${img});
    background-color: #FFF8DC;
    padding-left: 7px;
    padding-right: 2px;
    border-radius: 20px; 
    padding-bottom: 7px; 
  }

  .skill{
    display: flex;
  }

  .Techskill{
    margin-left: 10px;
  }

  .badge{
    margin-top: 20px;
  }
`;

const StyledDiv = styled.div`
  margin-top: 1.5%;
  line-height: 1.6;
  display: flex;
  justify-content: space-between;

  .toolsDiv {
    width: 53%;
    margin: 3px 8px;
    padding: 3px 5px;

    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
      padding-left: 3px;
    }
  }

  .introDiv {
    width: 45%;
    margin: 3px 12px;
    background-image: url(${img});
    background-color: #FFF8DC;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 20px;

    h3 {
      margin-top: 30px;
      margin-bottom: 10px;
      padding: 3px 5px;
    }
  }

  .body-par{
    border: #D3D3D3 0.5px solid;
    border-radius: 10px;
    padding: 3px 5px;

    span {
      color: #4682B4;
      font-weight: 500;
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 550px){
    display: flex;
    flex-direction: column;

    .toolsDiv {
      width: 94%;
    }

    .introDiv {
      width: 92%;
    }
  } 
`;

const ParagraghsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    margin: 3px 5px;
    border: 1px solid #2098d1;
    border-radius: 5px;
    padding: 3px 4px;
  }
`;
