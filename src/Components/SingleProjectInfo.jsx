import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PojectInfo, TechStack } from "./PojectInformation";
import styled from "styled-components";

function SingleProject(props) {
  const proppId = props.match.params.id;
  let calledProject = [];
  let techStacks = [];

  PojectInfo.map(project => {
    if (Number(proppId) === project.id) {
      calledProject.push(project);
    }
    return calledProject;
  });
  TechStack.map(tech => {
    if (Number(proppId) === tech.id) {
      techStacks.push(tech);
    }
    return calledProject;
  });

  return (
    <StyledDiv>
      <div className="projectCard animated animatedFadeInUp fadeInUp">
        {calledProject.map(information => (
          <div key={information.id}>
            <h2 className="intro">{information.name}</h2>
            <hr />
            <p>{information.about}</p>
            <p className="project-para">{information.workedOn}</p>
          </div>
        ))}
        {techStacks.map(stack => (
          <div key={stack.id}>
            <p>
              Tech stacks used includes:
              <span>{stack.tech1}</span>
              <span>{stack.tech2}</span>
              <span>{stack.tech3}</span>
              <span>{stack.tech4}</span>
              <span>{stack.tech5}</span>
              <span>{stack.tech6}</span>
              <span>{stack.tech7}</span>
              <span>{stack.tech8}</span>
              <span>{stack.tech9}</span>
              <span>{stack.tech10}</span>
            </p>
          </div>
        ))}
        {calledProject.map(information2 => (
          <div className="gitwebBtn" key={information2.id}>
            <div className="gitweb">
              <p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={information2.gitHubRepo}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" target="_blank" />
                </a>
              </p>
              <p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={information2.deployedAt}
                >
                  <FontAwesomeIcon icon={faGlobe} size="2x" />
                </a>
              </p>
            </div>
            <div>
              <p onClick={props.history.goBack}>
                <span className="backbutton hvr-radial-out">
                  Back to projects
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </StyledDiv>
  );
}

export default withRouter(SingleProject);

const StyledDiv = styled.div`
  margin-top: 10%;
  text-align: center;

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
  span {
    margin: 3px 5px;
    color: #4630ff;
    font-weight: 600;
    font-size: 18px;
    border-radius: 5px;
    padding: 3px 4px;
  }
  .gitwebBtn {
    width: 450px;
    margin: auto;
    margin-top: 40px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .gitweb {
    width: 200px;
    margin: auto;
    display: flex;
    text-align: right;
    justify-content: space-evenly;
    a {
      color: #2098d1;
      transition: transform 250ms;
      display: inline-block;
    }
    a:hover {
      transform: translateY(-3px);
    }
  }
  .projectCard {
    max-width: 750px;
    padding-top: 10px;
    margin: 13% auto;
    box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.4);
    background-color: #f5f5f5;
  }
  .backbutton {
    display: flex;
    float: right;
    color: black;
    padding: 3px 7px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #2098d1;
    margin-right: 20px;
  }
  .project-para {
    margin-top: 30px;
    font-size: 15px;
  }
  .intro {
    text-shadow: 1px 1px 1px lightblue, 3px 3px 2px darkgray;
  }
  p {
    padding: 3px;
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
`;
