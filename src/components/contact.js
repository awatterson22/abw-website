import '../App.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { IoIosMail } from "react-icons/io";

function Contact() {
  return (
    <div className="Contact">
      <p id="contact-msg">Feel free to connect with me!</p>
      <div class="vl"></div>
      <div class="contact-info">
        <FaPhoneAlt fontSize="0.4em"/>
        <a href="tel://603-759-8562" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} >603-759-8562</a>

        <IoIosMail fontSize="0.6em"/>
        <a href="mailto://awatterson@umass.edu" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} >awatterson@umass.edu</a>

        <GoMarkGithub fontSize="0.5em"/>
        <a href="https://github.com/awatterson22" target="_blank" rel="noopener noreferrer">https://github.com/awatterson22</a>

        <FaLinkedin fontSize="0.5em"/>
        <a href="https://www.linkedin.com/in/abby-watterson/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/abby-watterson/</a>
      </div>
    </div>
  );
}

export default Contact;
