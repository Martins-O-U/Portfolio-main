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

const StyledDiv = styled.div`
  height: 100vh;
  overflow: hidden;
  background-image: url(${img});
  background-color: #fafafa;
  margin: 0 20px;
`;

function App() {
  return (
    <StyledDiv>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/skills" component={Skills} />
      <Route path="/project" component={Projects} />
      <Route path="/singleProject/:id" component={SingleProjectInfo} />
    </StyledDiv>
  );
}

export default App;
