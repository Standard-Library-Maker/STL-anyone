import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './HeaderTemplate.scss';
import logo2 from "static/images/logo2.png";

class HeaderTemplate extends Component {

  render() {
    return (
      <div className="header">
        <div className="logo-section">
          <Link to="/">
            <img src={logo2} className="header-logo" alt="logo" />
          </Link>
        </div>
        <div className="header-bar">
          <div className="help">
            <a
              href="https://jisoo0925.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              help
            </a>
          </div>

          <div className="menu">
            menu
          </div>
        </div>
      </div >
    )
  }
}

export default HeaderTemplate;