import "./about.css";
import Skills from "../../img/skills.png";
import ProfileImage from "../../img/profile-pic.png";
import Resume from "../../img/resume.pdf";

const About = () => {
  const downloadTxtFile = () => {
    // text content
    const texts = ["line 1", "line 2", "line 3"]
    // file object
    const file = new Blob(texts, {type: 'text/plain'});
    // anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "100ideas-" + Date.now() + ".txt";
    // simulate link click
    document.body.appendChild(element);
    // Required for this to work in FireFox
    element.click();
}


  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={ProfileImage} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          “Hello, I am Nitish Kumar, I'm from New Delhi City. I completed my graduation in B.Tech Computer science & Engineering in 2023 with 75.33% at Maharshi Dayanand University,Rohtak. After that I decided to start my career in the IT field.
          I have a strong foundation in front-end technologies such as HTML,
          CSS, and JavaScript, Reactjs as well as back-end technologies such as
          Node.js, MongoDB, and Java. I am passionate about creating responsive
          and user-friendly web applications that meet the needs of clients and
          end-users.
        </p>
        <p className="about-desc">
          
          My short-term goal as a fresher to gain experience in Frontend as well as backend development and sharpen my technical skills.
          My long-term goal is to be in a higher position in that company.
          My positive strength is adaptability. I easily adapt to a new environment.
          It's all about me. Thanks.
          I am excited to be here today and look forward to discussing my experience and qualifications with you.
        </p>
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="about-btn" onClick={downloadTxtFile} value="download" >Resume</button>
        </a>
        <div className="about-skills">
          <img src={Skills} alt="" className="about-skills-img" />
          <div className="about-skills-texts">
            <h4 className="about-skills-title">SKILLS</h4>
            <p className="about-skills-desc">
              JAVA, JAVASCRIPT, REACT, HTML, CSS, NODEJS, SQL, MONGODB, EXPRESS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
