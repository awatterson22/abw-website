import '../App.css';

function Experience() {
  return (
    <div className="Experience">
      <div name="experience">
        <h1>Experience</h1>
        <div id="job1">
          <div class="job-info">
            <p class="company">FIDELITY INVESTMENTS</p>
            <hr />
            <p class="position">CLOUD ENGINEERING INTERN</p>
            <p class="dates">JUNE - AUGUST 2021</p>
          </div>
          <div class="job-description">
            <ul>
              <li>Co-developed a squad health check application within Enterprise Cloud Computing.</li>
            </ul>
          </div>
        </div>
        <div id="job2">
          <div class="job-info">
            <p class="company">FIDELITY INVESTMENTS</p>
            <hr />
            <p class="position">CLOUD DATA SERVICES INTERN</p>
            <p class="dates">JUNE - AUGUST 2020</p>
          </div>
          <div class="job-description">
            <ul>
              <li>Co-implemented CloudFormation support for multiple databases in AWS on a CLI within Enterprise Cloud Computing.</li>
              <li>Created a new command in Python for the CLI where users can pull the locations in Artifactory of previously uploaded parameter and tag files during stack creation in AWS.</li>
              <li>Wrote Python Unit and Functional tests for developed code</li>
              <li>Developed CI/CD pipelines in Jenkins for deploying Docker images of the CLI to Artifactory and Concourse.</li>
              <li>Lead a two-week sprint as Scrum Leader within a Cloud Data Services Intern group.</li>
            </ul>
          </div>
        </div>
        <div id="job3">
          <div class="job-info">
            <p class="company">FIDELITY INVESTMENTS</p>
            <hr />
            <p class="position">SOFTWARE ENGINEERING INTERN</p>
            <p class="dates">MAY - AUGUST 2019</p>
          </div>
          <div class="job-description">
            <ul>
              <li>Worked with analytical coding problems on web applications within the Corporate Technology Group.</li>
              <li>Tested and debugged code in Java in a web application for employees to review performance history.</li>
              <li>Refactored JavaScript, HTML, and CSS code to improve user experience on a career scheduling application.</li>
              <li>Created a Java program for migrating job descriptions from one platform to another.</li>
              <li>Collaborated alongside other software developers in an Agile work environment.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
