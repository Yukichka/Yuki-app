import React from "react";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        © {new Date().getFullYear()}{" "}
        <Link to="/" className="footer-link">
          <span>Yuki Inasawa</span>.
        </Link>{" "}
        All Right Reserved.
      </div>
    );
  }
}
