import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./Components/HomePage";
import img from "./Components/images/bg.png";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import SingleProjectInfo from "./Components/SingleProjectInfo";
import Menu from "./Components/hamburgerMenu";
import Contact from "./Components/Contact";
import Thanks from "./Components/Thanks";

const StyledDiv = styled.div`
  height: 100vh;
  overflow: hidden;
  background-image: url(${img});
  background-color: #fafafa;
  margin: 0 20px;

  @media only screen and (max-width: 1105px){
    overflow: auto;
  }
  
`;

function App() {
  return (
    <StyledDiv>
      <Navbar />
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/skills" component={Skills} />
      <Route path="/project" component={Projects} />
      <Route path="/singleProject/:id" component={SingleProjectInfo} />
      <Route path="/contact" component={Contact} />
      <Route path="/thanks" component={Thanks} />
    </StyledDiv>
  );
}

export default App;
