import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

/* 
  Component Description:
    This is the menu displayed on mobile devices when the
    sandwhich menu icon is pressed.

  Incoming Props:
    - toggleSandwichMenu ... a callback function which opens or closes the sandwich menu
*/

export default function SandwichMenu(props) {

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );

}
