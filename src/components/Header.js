import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header-box">
        <h1 className="display-5"> Giphy Images</h1>
      </div>
    );
  }
}

export default Header;
