import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    document.getElementById("mobilenav").style.width = "100%";
  }
  closeNav() {
    document.getElementById("mobilenav").style.width = "0";
  }
  render() {
    return (
      <div className="header">
        <div id="main">
          <Link to="/" className="header-title">
            Yuki Inasawa
          </Link>
          <div className="main-nav">
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
                <Link to="/search" className="nav-link">
                  Search
                </Link>
              </li>
            </ul>
          </div>
          <div className="openbtn" onClick={this.openNav}>
            &#9776;
          </div>
        </div>
        <div id="mobilenav">
          <div className="closebtn" onClick={this.closeNav}>
            &times;
          </div>
          <div className="mobile-menu">
            <Link to="/" onClick={this.closeNav}>Portfolio</Link>
            <p className="line">&nbsp;</p>
            <Link to="/about" onClick={this.closeNav}>About</Link>
            <p className="line">&nbsp;</p>
            <Link to="/search" onClick={this.closeNav}>Search</Link>
          </div>
        </div>
      </div>
    );
  }
}
