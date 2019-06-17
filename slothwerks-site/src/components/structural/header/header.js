import React, { useState, Fragment } from 'react';

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
    <header>
      <img src={require('../../../assets/images/logo-text-only.png')} />
      <HeaderNav toggleSandwichMenu={props.toggleSandwichMenu} />
    </header>
  );

}
