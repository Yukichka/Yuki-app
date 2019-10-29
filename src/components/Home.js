import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home-content">
          Hi, I'm Yuki, a self-taught developer. Welcome to my little portfolio
          and creative space on the web. Please feel free to contact me for
          freelance projects.
        </div>
        <Footer />
      </div>
    );
  }
}
