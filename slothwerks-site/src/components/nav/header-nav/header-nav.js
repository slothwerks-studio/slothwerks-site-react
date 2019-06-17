import React, { useState, Fragment } from 'react';
import { Route, Switch, Link } from "react-router-dom";

/* 
  Component Description:
    This is the menu displayed within the top header bar
    on desktop-sized viewports.

  Incoming Props:
    - toggleSandwichMenu ... a callback function which opens or closes the sandwich menu
*/

export default function HeaderNav(props) {

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route path="/contact">
          <img src={require('../../../assets/icons/contact-purple-hollow.png')} />
        </Route>
        <Route path="*">
          <img src={require('../../../assets/icons/contact-purple-filled.png')} />
        </Route>
      </Switch>
      <span onClick={()=>props.toggleSandwichMenu()}>
        <img src={require('../../../assets/icons/sandwich-menu-black.png')} />
      </span>
    </nav>
  );

}
