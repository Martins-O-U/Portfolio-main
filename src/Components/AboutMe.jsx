import React from 'react';
import styled from 'styled-components';
import selfPix from './images/pic00.jpg';

const StyledContainer = styled.div`
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

  h3 {
    margin-top: 7%;
    margin-left: 2%;
    font-size: 25px;
  }
`;
const StyledDiv = styled.div`
  margin: 3% 2%;
  display: flex;
  justify-content: space-between;
`;

const StyledPara = styled.div`
  width: 55%;
  margin: 5px 10px 5px 5px;
  padding: 3px;
`;

const AboutPix = styled.p`
  width: 43%;
  margin: 5px;
  text-align: center;

  img {
    border-radius: 20px;
    width: 280px;
  }
`;

const AboutMe = () => {
  return (
    <StyledContainer>
      <div className="animated animatedFadeInUp fadeInUp">
        <h3>About Me</h3>
        <StyledDiv>
          <StyledPara>
            <p>
              I had my first real exposure to how Information Technology work
              about a year and six months ago, it was a life defining moment for
              me. At first, i explored Computer Networking and some aspect of
              Network Security, within which period i also got introduced to Web
              Development, there i knew i had found my path and began some self
              study sessions. By August 2019 i quit all else (which included my
              Maintenance job as a Mechanical Engineer) and joined Lambda School
              as a Full Stack Web Development student.
            </p>
            <p>
              To this very day my love for coding never waned, thus while
              learning everyday i developed great interpersonal skills as well
              as skills required of a Software Engineer, be it the Front-End or
              Back-End/Database Management. My ultimate goal is to contribute
              towards making life easier through the use of smart technology.
            </p>
            <p>
              When i am not working on a project, i am either volunteering,
              spending time with family and friends or playing board games.
            </p>
          </StyledPara>
          <AboutPix>
            <img src={selfPix} alt="My Profile Pix" id="self-img" />
          </AboutPix>
        </StyledDiv>
      </div>
    </StyledContainer>
  );
};
export default AboutMe;
