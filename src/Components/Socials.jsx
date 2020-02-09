import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const StyledDiv = styled.div`
  a {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
  }

  a:hover {
    transform: translateY(-3px);
  }
`;

export default function Socials() {
  return (
    <StyledDiv>
      <div className="social-handle">
        <a href="https://twitter.com/Willyblinx_" className="twitter">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/Martins-O-U/" className="github">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/martins-o-u/" className="linkdIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:martinsonyedikachi@gmail.com" className="mail">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </StyledDiv>
  );
}
