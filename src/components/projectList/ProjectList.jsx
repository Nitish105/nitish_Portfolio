import "./projectList.css";
import MyProject from "../myproject/MyProject";
import { myproject } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Latest Projects Here</h1>
        <p className="pl-desc">
          Nitish Kumar is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {myproject.map((item) => (
          <MyProject key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;