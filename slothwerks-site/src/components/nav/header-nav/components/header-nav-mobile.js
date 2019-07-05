import React, { useState, Fragment } from 'react';
import { Route, Switch, Link } from "react-router-dom";

/* 
  Component Description:
    This is the mobile version of the header navigation.

  Incoming Props:
    - toggleSandwichMenu ... a callback function which opens or closes the sandwich menu
*/

export default function HeaderNavMobile(props) {

  return (
    <nav className="HeaderNavMobile">
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
      <span 
        className="sandwich-menu-icon-container"
        onClick={()=>props.toggleSandwichMenu()}
      >
        <img 
          className="sandwich-menu-icon"
          src={require('../../../../assets/icons/sandwich-menu-black.png')} 
        />
      </span>
    </nav>
  );

}
