import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Grid from "@material-ui/core/Grid";

export class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header />
        <div className="about-header">
          Hi, I'm Yuki, a self-taught JavaScript developer based in Islington,
          London UK. I love to try new things and be amazed by the outcome. I
          code and make coffee. I love cafe, travel and yoga.
        </div>

        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} className="grid-skill">
            <div className="skill">Skills →</div>
            <ul className="skill-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>React</li>
              <li>Vue</li>
              <li>JQuery</li>
              <li>react-router</li>
              <li>WordPress</li>
              <li>Bootstrap3</li>
              <li>Material-UI</li>
              <li>Git VCS</li>
              <li>Unix Command Line</li>
              <li>Sublime Text</li>
              <li>VS Code</li>
              <li>Google Maps API</li>
              <li>Amazon Alexa skill</li>
              <li>Mongo DB</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} className="grid-education">
            <div className="education">Education →</div>
            <ul className="education-list">
              <li>Juntendo University, Japan</li>
              <li>(Bachelor of Nursing)</li>
              <li>Udacity, London</li>
              <li>(Google Developer Scholarship)</li>
              <li>freeCodeCamp, London</li>
              <li>(JavaScript ES6 React)</li>
              <li>Udemy, London</li>
              <li>(React)</li>
            </ul>
          </Grid>
        </Grid>
        <br/>
        <Footer />
      </div>
    );
  }
}
