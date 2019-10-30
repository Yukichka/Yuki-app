import React from "react";
import { Link } from "react-router-dom";


export class Search extends React.Component {
  render() {
    return (
      <div className="search">
        {/* <Header/> */}
        <div className="search-msg">Not just yet</div>
        <p class="line">&nbsp;</p>
        <br/>
        <Link to="/" className="search-back">Back to Top</Link>
        {/* <Footer/> */}
      </div>
    );
  }
}
