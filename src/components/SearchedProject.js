import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { allProjects } from "./Dataset";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function SearchedProject() {
  let { el } = useParams();
  const filteredProject = allProjects.filter(project =>
    project.tech.includes(el)
  );

  // let allProjectsWithRequiredTech = [];
  // allProjects.forEach(project => {
  //   if (project.tech.includes(el))
  //     allProjectsWithRequiredTech.push(project)
  // })

  // console.log('allProjectsWithRequiredTech', allProjectsWithRequiredTech)
  console.log(filteredProject);
  return (
    <div className="searched-project">
      <Header />
      <div className="filtered-header">
        Filed under <strong>{el}</strong>
      </div><p className="line">&nbsp;</p>
      <ul className="filtered-list">
        {filteredProject.map((project, idx) => (
          <Link to={`/project/${project.name}`} className="filtered-link" key={idx}>
            <li>{project.name}</li>
          </Link>
        ))}
        
      </ul>
      <p className="line">&nbsp;</p>
      {/* <Footer /> */}
    </div>
  );
}
