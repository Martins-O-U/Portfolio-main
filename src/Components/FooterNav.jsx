import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';

const StyledDiv = styled.div``;

export default function Footer() {
  return (
    <StyledDiv>
      <div className="copy-right"> &copy; 2020 Martins O-U</div>
      <div className="social-handle">
        <Socials />
      </div>
    </StyledDiv>
  );
}
