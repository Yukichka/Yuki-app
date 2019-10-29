import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-title">
          Yuki Inasawa
        </Link>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-link">
                Search
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
