import React, { useState } from "react"
import styled from "styled-components";
import axios from "axios";
import Socials from "./Socials";

function Contact(props) {
  const contact_information = {
    name: '',
    email: '',
    number: '',
    comment: ''
  }

  const [message, setMessage] = useState(contact_information)

  const handleChange = (e) => {
    e.persist();
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://portfolio-martins.herokuapp.com/api/comments', message)
      .then(res => {
        props.history.push('/thanks')
      })
      .catch(error => {
      })
  };

  return (
    <StyledDiv>
      <div className=" form-container animated animatedFadeInUp fadeInUp">
        <h3 className="p-one">I'd Be Delighted To Receive A Message From You.</h3>
        <p className="p-two">Please reach out to me through any of the following:</p>
        <Socials />
        <form onSubmit={handleSubmit}>
          <div>
            <input name="name" type="text" placeholder="Hello, What is your name?" onChange={handleChange} value={message.name} required />
          </div>
          <div>
            <input name="email" placeholder="Your Email" onChange={handleChange} value={message.email} required />
          </div>
          <div>
            <input name="number" type="number" placeholder="Your Phone Number" onChange={handleChange} value={message.number} />
          </div>
          <div>
            <textarea name="comment" maxLength="500" placeholder="Please type your message here..." onChange={handleChange} value={message.comment} required />
          </div>
          <div className="btn-field">
            <button type="submit" className="submit hvr-radial-out">Submit</button>
          </div>
        </form>
      </div>
    </StyledDiv>
  )
}

export default Contact;

const StyledDiv = styled.div`
text-align: center;
.p-one{
  padding-top: 3%;
  margin-bottom: 5px

}
.p-two{
    margin-bottom: 30px;
    margin-top: 2px

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