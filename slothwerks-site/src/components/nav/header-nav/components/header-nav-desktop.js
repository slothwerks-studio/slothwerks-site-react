import React, { useState, Fragment } from 'react';
import { Route, Switch, Link } from "react-router-dom";

/* 
  Component Description:
    This is the desktop version of the header navigation.

  Incoming Props:
    None
*/

export default function HeaderNavDesktop(props) {

  return (
    <nav className="HeaderNavDesktop">
      <div className="header-nav-link-list">
        <Link to="/about" className="header-nav-link">
          About
        </Link>
        <Link to="/audio-archives" className="header-nav-link">
          Audio<br />Archives
        </Link>
        <Link to="/ena-calendar" className="header-nav-link">
          ENA Community<br />Calendar
        </Link>
        <Link to="/tech calendar" className="header-nav-link">
          Grand Circus<br />Tech Calendar
        </Link>
      </div>
      <Switch>
        <Route path="/contact">
          <span className="contact-icon-container">
            <img 
              className="contact-icon"
              src={require('../../../../assets/icons/contact-purple-hollow.png')} 
            />
          </span>
        </Route>
        <Route path="*">
          <Link to="/contact" className="contact-icon-container">
            <img 
              className="contact-icon"
              src={require('../../../../assets/icons/contact-purple-filled.png')} 
            />
          </Link>
        </Route>
      </Switch>
    </nav>
  );

}
