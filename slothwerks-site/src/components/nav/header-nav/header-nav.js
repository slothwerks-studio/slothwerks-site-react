import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

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
      <div onClick={()=>props.toggleSandwichMenu()}>Menu</div>
    </nav>
  );

}
