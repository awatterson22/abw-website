import '../App.css';
import profile_picture from '../assets/profile_picture.png';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";


function About() {
  return (
      <div className="About">
        <div class="container">
          <div class="rectangle gainsboro"></div>
          <div class="profile">
            <div class="profile-card">
                <img src={profile_picture} alt="Profile Picture" />
                <div id="cardName">
                    <p>Abby</p>
                    <p>Watterson</p>
                </div>
                <hr />
                <p class="job-title">SOFTWARE ENGINEER</p>
                <br/>
                <div class="profile-contact">
                  <a href="https://github.com/awatterson22" target="_blank" rel="noopener noreferrer">
                    <GoMarkGithub fontSize="0.5em"/>
                  </a>
                  <a href="https://twitter.com/abby_watterson" target="_blank" rel="noopener noreferrer">
                    <FaTwitter fontSize="0.5em"/>
                  </a>
                  <a href="https://www.linkedin.com/in/abby-watterson/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin fontSize="0.5em"/>
                  </a>
                  <a href="https://www.instagram.com/abby.watterson/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram fontSize="0.5em"/>
                  </a>
                </div>
            </div>
          </div>
          <div class="description">
            <h1>Hello!</h1>
            <p id="title">Here's who I am & what I do</p>
            <p class="description-txt" style={{marginTop: "40px"}}>I'm a rising senior at the University of Massachusetts Amherst. I am a candidate for a Bachelor's of Science in Computer Science with a minor in Mathematics, and I will be graduating in May 2022. I am currently spending my summer at Fidelity Investments as a Cloud Engineering intern within the Enterprise Cloud Computing Group.</p>
            <p class="description-txt">I’m a quick-study and eager to gain knowledge and skills within the world of Computer Science.</p>
          </div>
        </div>
      </div>
  );
}

export default About;
