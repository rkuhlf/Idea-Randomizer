import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Idea Generator</h1>

        <p>
          Struggling with creativity?
          <br />
          <Link to="/edit?list=newList">Create a new list</Link> or{" "}
          <Link to="/generatePage">use a some already create lists</Link> to
          help you come up with ideas.
        </p>
      </div>
    );
  }
}

export default HomePage;
