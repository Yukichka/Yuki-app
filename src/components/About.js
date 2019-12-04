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
          <Grid item xs={12} sm={6} className="about-grid">
            <div className="about-title">Skills →</div>
            <ul className="about-list">
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
              <li>Express</li>
              <li>Heroku</li>
              <li>Firebase</li>
              <li>Redux</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} className="about-grid">
            <div className="about-title">Education →</div>
            <ul className="about-list">
              <li>Juntendo University, Tokyo</li>
              <li>(Bachelor of Nursing)</li>
              <li>Udacity, London</li>
              <li>(Google Developer Scholarship)</li>
              <li>freeCodeCamp, London</li>
              <li>(JavaScript ES6 React)</li>
              <li>Udemy, London</li>
              <li>(React Redux Firebase)</li>
              <li>GDG Cloud London, London</li>
              <li>(JavaScript React Firebase)</li>
            </ul>
            <div className="contact-me">Reach me →</div>
            <ul className="contact-me-list">
              <li>
                <a
                  href="https://github.com/Yukichka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-me-link"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yuki-inasawa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-me-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ukinnn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-me-link"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <br />
        <div className="about-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
