import React from "react";
import { Link } from "react-router-dom";


export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">© 2019 <Link to ="/" className="footer-link">Yuki Inasawa.</Link> All Right Reserved.</div>
    );
  }
}
