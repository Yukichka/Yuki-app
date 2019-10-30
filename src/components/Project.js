import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { allProjects } from "./Dataset";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function Project() {
  let { projectName } = useParams();
  const projectInfo = allProjects.find(project => project.name === projectName);
  // console.log(projectInfo);

  return (
    <div className="project">
      <Header />
      <div className="project-content">
        <div className="project-title">{`${projectInfo.name}`}</div>
        <div>Tech:{`${projectInfo.tech}`}</div>
        <div>Style:{`${projectInfo.style}`}</div>
        <div>
          URL:
          <a
            href={`${projectInfo.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="project-url"
          >{`${projectInfo.url}`}</a>
        </div>
        <a
          href={`${projectInfo.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/imgs/github.png" alt="" />
        </a>
        <div>
          <Link to="/" className="back-link">
            ← Back
          </Link>
        </div>
      </div>
      <div className="web-container">
        <div>Web</div>
        <p class="line">&nbsp;</p>
        <div className="web-img-container">
          <img src={`${projectInfo.img.web[0]}`} alt="" className="web-img" />
          <img src={`${projectInfo.img.web[1]}`} alt="" className="web-img" />
          <img src={`${projectInfo.img.web[2]}`} alt="" className="web-img" />
        </div>
      </div>
      <div className="mobile-container">
        <div>Mobile</div>
        <p class="line">&nbsp;</p>
        <div className="mobile-img-container">
          <img
            src={`${projectInfo.img.mobile[0]}`}
            alt=""
            className="mobile-img"
          />
          <img
            src={`${projectInfo.img.mobile[1]}`}
            alt=""
            className="mobile-img"
          />
          <img
            src={`${projectInfo.img.mobile[2]}`}
            alt=""
            className="mobile-img"
          />
        </div>
      </div>
      <div className="project-footer">
      <Footer />
  </div>
    </div>
  );
}
