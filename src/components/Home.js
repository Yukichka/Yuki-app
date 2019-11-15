import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { allProjects } from "./Dataset";
import { Link } from "react-router-dom";


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getProjectInfo = this.getProjectInfo.bind(this);
    this.state = {project:""}
  }

  getProjectInfo(project) {
    const clickedProject = project.name;
    this.setState({project:clickedProject})
  }
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home-content">
          Hi, I'm Yuki, a self-taught developer. Welcome to my little portfolio
          and creative space on the web. Please feel free to contact me for
          freelance projects.
        </div>
        <div className="home-projects">
          {allProjects.map((project, idx) => (
            <div className="each-project" key={idx}>
              <Link to={`/project/${project.name}`} className="link-project">
                <div
                  className="each-project-link"
                  onClick={() => this.getProjectInfo(project)}
                >
                  <img
                    src={`${project.img.web[0]}`}
                    className="each-project-img"
                    alt=""
                  />
                  <br />
                  <div className="each-project-name">{`${project.name}`}</div>
                </div>
              </Link>
              <div className="each-project-tech">Tech:{`${project.tech}`}</div>
            </div>
          ))}
        </div>
        <div className="home-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
