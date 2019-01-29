import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HeaderTemplate from 'components/header/HeaderTemplate';
import './LandingTemplate.scss';
import logo from 'static/images/Project_Name_Logo.png';
import ToastMessage from 'components/popup/ToastMessage';

class LandingTemplate extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-header">
          <HeaderTemplate/>
        </div>
        <div className="main-section">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="menu-list">
            <Link to="/stack">Stack</Link>
            <Link to="/queue">Queue</Link>
            <Link to="/priority_queue">Priority Queue</Link>
            <ToastMessage msg="test message"/>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingTemplate;