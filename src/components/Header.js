import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { withRouter } from "react-router";

// browserHistory.listen( location =>  {
//   //Do your stuff here
//   console.log(location)
//  });

class HeaderImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSearchOpen: false };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.closeSearch();
      this.closeMobileSearch();
      this.closeNav();
      console.log("You changed the page to: ", location.pathname);
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }

  openSearch(event) {
    document.getElementById("open-search").style.width = "180px"; 
    this.setState({ isSearchOpen: true });
    event.preventDefault();
  }
  closeSearch() {
    document.getElementById("open-search").style.width = "0";
    this.setState({ isSearchOpen: false });
  }
  openMobileSearch(event) {
    document.getElementById("mobile-search").style.display = "inline-block";
    event.preventDefault();
  }
  closeMobileSearch() {
    document.getElementById("mobile-search").style.display = "none";
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
                {this.state.isSearchOpen ? (
                  <Link to="" className="nav-link" onClick={this.closeSearch}>
                    Search
                  </Link>
                ) : (
                  <Link to="" className="nav-link" onClick={this.openSearch}>
                    Search
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div id="open-search">
            <Search />
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
            <Link to="/" onClick={this.closeNav}>
              Portfolio
            </Link>
            <p className="line">&nbsp;</p>
            <Link to="/about" onClick={this.closeNav}>
              About
            </Link>
            <p className="line">&nbsp;</p>
            <Link to="" onClick={this.openMobileSearch}>
              Search
            </Link>
          </div>
          <div id="mobile-search">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export const Header = withRouter(HeaderImpl);
