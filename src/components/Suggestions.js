import React from "react";
import { Link } from "react-router-dom";

export class Suggestions extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // getClickedTech(clickedTech) {
  //   console.log("clicked: ", clickedTech);
  // }

  render() {
    const options = this.props.results.map((el,idx) => (
      <Link to={`/${el}`} key={idx} className="link-list">
        <li>{el}</li>
      </Link>
    ));
    console.log("props:", this.props.results, options);
    return (
      <div>
        <ul className="suggestions-lists">{options}</ul>
      </div>
    );
  }
}

