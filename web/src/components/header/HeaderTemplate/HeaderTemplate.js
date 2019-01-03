import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderTemplate.scss';
import logo3 from "static/images/logo3.png";

class HeaderTemplate extends Component {

  render() {
    return (
      <div className="header">
        <div className="logo-section">
          <Link to="/">
            <img src={logo3} className="header-logo" alt="logo" />
          </Link>
        </div>
        <div className="menu">
          menu
        </div>
        <input type="button" value="help" onclick="location.href=../src/out/index.html"></input>
      </div >
    )
  }
}

export default HeaderTemplate;