import React from 'react';
import { Link } from "react-router-dom";

// Import components
import HeaderNav from '../../nav/header-nav/header-nav';

/* 
  Component Description:
    This is the header bar.  It contains navigation elements for desktop-sized viewports.

  Incoming Props:
    - toggleSandwichMenu ... a callback function which opens or closes the sandwich menu
*/

export default function Header(props) {

  return (
    <header className="Header">
      <Link to="/" className="header-logo-container"> 
        <span className="header-logo-sloth-text">
          Sloth
        </span>
        <span className="header-logo-werks-text">
          Werks
        </span>
      </Link>
      <HeaderNav toggleSandwichMenu={props.toggleSandwichMenu} />
    </header>
  );

}
