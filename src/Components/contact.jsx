import React, { useState } from "react"
import axios from "axios";
import styled from "styled-components";
import Socials from "./Socials";
import img from "../Components/images/bg.png";

function Contact(props) {
  const contact_information = {
    name: '',
    email: '',
    number: '',
    comment: ''
  }

  const [message, setMessage] = useState(contact_information)
  const [button, setButton] = useState(false)
  const [submitAction, setsubmitAction] = useState(false)
  const [serverAction, setServerAction] = useState(false)

  const handleChange = (e) => {
    e.persist();
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButton(!button)
    setsubmitAction(!submitAction)
    axios
      .post('https://portfolio-martins.herokuapp.com/api/comments/', message)
      .then(res => {
        props.history.push('/thanks')
      })
      .catch(error => {
        console.log(error.message)
        setsubmitAction(submitAction)
        setServerAction(!serverAction)
      })
  };

  return (
    <StyledDiv>
      <div className=" form-container animated animatedFadeInUp fadeInUp">
        <h2 className="p-one">I'd Be Delighted To Receive A Message From You.</h2>
        <p className="p-two">Please reach out to me through any of the following:</p>
        <Socials />
        <form onSubmit={handleSubmit}>
          <div className={`${submitAction ? 'show' : 'hide'}`}>
            <p><span id="sub-span">Submitting....</span></p>
          </div>
          <div className={`${serverAction ? 'server-show' : 'server-hide'}`}>
            <p><span id="server-span">Our server is temporarily down, please send a direct mail to <strong>martinsonyedikachi@gmail.com</strong></span></p>
          </div>
          <div className="required">* are required</div>
          <div><label>*</label>
            <input name="name" type="text" placeholder="Hello, What is your name?" onChange={handleChange} value={message.name} required />
          </div>
          <div><label>*</label>
            <input name="email" placeholder="Your Email" onChange={handleChange} value={message.email} required />
          </div>
          <div className="number-class">
            <input name="number" type="number" placeholder="Your Phone Number" onChange={handleChange} value={message.number} />
          </div>
          <div><label>*</label>
            <textarea name="comment" maxLength="500" placeholder="Please type your message here..." onChange={handleChange} value={message.comment} required />
          </div>
          <div className="btn-field">
            <button type="submit" className="submit hvr-radial-out" disabled={button}>Submit</button>
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
  margin-bottom: 5px;
}
label{
  color: red;
}
.hide{
  display: none;
}
.server-show{
  display: block;
}
.server-hide{
  display: none;
}
.show{
  display: block;
}
.p-two{
    margin-bottom: 30px;
    margin-top: 2px;
}
#server-span{
  font-size: 14px;
  background: lightgrey;
  font-size: 14px;
  padding:5px;
  margin: 7px auto 1px;
  color: red;
}
#sub-span{
  background: #7CFC00;
  font-size: 18px;
  padding:3px 70px;
  margin-top: 7px;
  margin-bottom: 1px;
}
.required{
  font-size: 12px;
  color: red;
}
.number-class{
  padding-left: 5px;
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
    background-image: url(${img});
    background-color: #FFF8DC;
    border-radius: 20px;
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
    width: 75px;
    margin-bottom: 3%;
    border-radius: 5px;
    padding: 5px 4px;
    cursor: pointer;
    border: 1px solid #2098d1;
    border-radius: 10px;
    font-size: 14.5px;
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
    background: #FFF8DC;
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

  @media only screen and (max-width: 850px){
    .form-container{
      margin-top: 10%;
    }
  }
  @media only screen and (max-width: 700px){
    .form-container{
      margin-top: 13%;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
  @media only screen and (max-width: 550px){
    .form-container{
      margin-top: 15.5%;
      padding-right: 10px;
      padding-left: 10px;
    }

      input{
        width: 80%;
      }

      textarea{
        width: 80%
      }
  }
`;