import React, { useState, Fragment } from 'react';
import { Route, Switch, Link } from "react-router-dom";

// Import header navigation for various viewports
import HeaderNavMobile from './components/header-nav-mobile';

/* 
  Component Description:
    This is the area displayed within the top header bar
    which includes navigation elements.

  Incoming Props:
    - toggleSandwichMenu ... a callback function which opens or closes the sandwich menu
*/

export default function HeaderNav(props) {

  return (
    <div className="HeaderNav">
      <HeaderNavMobile toggleSandwichMenu={props.toggleSandwichMenu} />
    </div>
  );

}
