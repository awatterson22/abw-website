import '../App.css';
import HorizontalLabelPositionBelowStepper from './stepper';
import projectPic1 from '../assets/umass-pickup.png';
import projectPic2 from '../assets/fidelity.jpeg';

function Work() {
  return (
    <div className="Work">
      <div name="work">
        <div class="projects">
          <h1>Work</h1>
          <HorizontalLabelPositionBelowStepper />
        </div>
      </div>
    </div>
  );
}

export default Work;
