import React from "react";
import { allProjects } from "./Dataset";
import { Suggestions } from "./Suggestions";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: []
    };
  }

  getInfo = inputStr => {
    console.log("getInfo, input: ", inputStr);
    let filtered = [];
    const inputStrLowerCase = inputStr.toLowerCase();
    allProjects.forEach(project => {
      project.tech.forEach(techItem => {
        const hasText =
          techItem.toLowerCase().indexOf(inputStrLowerCase) !== -1;
        const wasInTheList = filtered.find(el => el === techItem) !== undefined;
        console.log(
          "tech",
          techItem,
          "hasText",
          hasText,
          "wasInTheList",
          wasInTheList
        );

        if (hasText && !wasInTheList) filtered.push(techItem);
      });
    });

    console.log("filtered list:", filtered);

    this.setState({
      results: filtered
    });
    console.log(this.state.results);
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 0) {
          this.getInfo(this.state.query);
        } else if (!this.state.query) {
        }
      }
    );
  };
  render() {
    return (
      <div className="search">
        {/* <Header/> */}
        {/* <div className="search-msg">Not just yet</div>
        <p className="line">&nbsp;</p>
        <br/>
        <Link to="/" className="search-back">Back to Top</Link> */}
        <form className="search-form">
          <input
            placeholder="Search by tech..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
            className="search-input"
          />
          <Suggestions results={this.state.results} className="search-results"/>
        </form>
        {/* <Footer/> */}
      </div>
    );
  }
}
