import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hdwzsie",
        "template_sxgwu9l",
        formRef.current,
        "OR__2XZu9fqSBUwz6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7701855617
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              nitishkumar105.singh@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              NEW DELHI, DELHI - 110059
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Let's Keep in touch.📧</b> Send Your Email Here!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            {/* <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" /> */}
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;