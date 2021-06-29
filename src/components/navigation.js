import "../App.css";
import Resume from '../assets/Resume.pdf';

function Navigation() {
  return (
    <div className="Navigation">
      <div class="blue box"></div>
      <div class="info">
        <b>
          <a href="/" id="name">
            Abby Watterson
          </a>
        </b>
        <span style={{ fontSize: "18px" }}>/</span>
        <a href="/" class="job-title">
          SOFTWARE ENGINEER
        </a>
      </div>
      <div class="spacer"></div>
      <div class="navbar">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#work">WORK</a>
        <a href={Resume} download>
          RESUME
        </a>
      </div>
    </div>
  );
}

export default Navigation;
