import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HeaderTemplate from 'components/header/HeaderTemplate';
import './LandingTemplate.scss';
import logo2 from 'static/images/logo2.png';

class LandingTemplate extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-header">
          <HeaderTemplate/>
        </div>
        <div className="main-section">
          <img src={logo2} className="App-logo" alt="logo" />
          <div className="menu-list">
              <Link to="/stack">Stack</Link>
              <Link to="/queue">Queue</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingTemplate;