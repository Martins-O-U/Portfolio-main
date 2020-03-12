import React from "react"
import styled from "styled-components";
import Socials from "./Socials";

function contact() {
    return (
        <StyledDiv>
            <div className=" form-container animated animatedFadeInUp fadeInUp">
                <p>Reach me through the following mediums</p>
                <Socials />
                <form action="mailto:martinsonyedikachi@gmail.com" method="post" enctype="text/plain">
                    <div>
                        <input name="Full Name" type="text" placeholder="Full Name" />
                    </div>
                    <div>
                        <input name="Email" placeholder="Email" />
                    </div>
                    <div>
                        <input name="number" type="number" placeholder="Phone Number" />
                    </div>
                    <div>
                        <textarea name="comments" maxLength="500" placeholder="Enter Additional information here..." />
                    </div>
                    <div className="btn-field">
                        <button type="submit" className="submit hvr-radial-out">Submit</button>
                    </div>
                </form>
            </div>
        </StyledDiv>
    )
}

export default contact;

const StyledDiv = styled.div`
text-align: center;
p{
    padding-top: 5%;
    margin-bottom: 30px;
}
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
  .form-container{
    margin-top: 8%;
    margin-left: 15%;
    margin-right: 15%; 
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 5px;
    text-align: center;
    box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

    @media only screen and (max-width: 750px){
        margin-left: 5%;
        margin-right: 5%; 
    }
    @media only screen and (max-width: 550px){
        padding-right: 10px;
        padding-left: 10px;
    }
  }
  form{
      margin-top: 30px;
  }
  input{
      width: 70%;
      height: 17px;
      margin: 3px;
  }
  textarea{
      width: 70%;
      height: 150px;
      margin-top: 10px;
      margin-bottom: 5px;
  }
  .submit{
    width: 80px;
    margin-bottom: 3%;
    border-radius: 5px;
    padding: 5px 7px;
    cursor: pointer;
    border: 1px solid #2098d1;
    border-radius: 10px;
   }
   .btn-field{
    text-align: left;
    margin-left: 14.5%;
   }
   .hvr-radial-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    // background: #e1e1e1;
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