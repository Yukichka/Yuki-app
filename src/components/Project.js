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
        {`${projectInfo.github}` != "" ? (
          <a
            href={`${projectInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/imgs/github.png" alt="" />
          </a>
        ) : (
          <div />
        )}
        <div>
          <Link to="/" className="back-link">
            ← Back
          </Link>
        </div>
      </div>
      <div className="web-container">
        <div>Web Image</div>
        <p className="line">&nbsp;</p>
        <div className="web-img-container">
          {projectInfo.img.web.map((img, idx) => (
            <img src={img} alt="" className="web-img" key={idx} />
          ))}
        </div>
      </div>
      <div className="mobile-container">
        <div>Mobile Image</div>
        <p className="line">&nbsp;</p>
        <div className="mobile-img-container">
          {projectInfo.img.mobile.map((img, idx) => (
            <img src={img} alt="" className="mobile-img" key={idx} />
          ))}
        </div>
      </div>
      <div className="project-footer">
        <Footer />
      </div>
    </div>
  );
}
