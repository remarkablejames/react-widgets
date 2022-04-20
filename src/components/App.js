import React from "react";
import Searchbar from "./SearchBar";
import Youtube from "../api/Youtube";

class App extends React.Component {
  onTermSubmit = async (searchTerm) => {
    console.log(searchTerm);
    const response = await Youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    console.log(response);
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar formSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
