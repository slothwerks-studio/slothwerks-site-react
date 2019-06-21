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
    <div className="sandwich-menu">

      <div className="sandwich-menu-header">
        <Link 
          to="/" 
          className="header-logo-container"
          onClick={()=>props.toggleSandwichMenu()}
        >
          SlothWerks
        </Link>
        <span 
          className="close-icon-container"
          onClick={()=>props.toggleSandwichMenu()}
        >
          <img 
            className="contact-icon"
            src={require('../../../assets/icons/close-white.png')} 
          />
        </span>
      </div>

      <div className="sandwich-menu-links">
        <Link 
          to="/about" 
          class="menu-link"
          onClick={()=>props.toggleSandwichMenu()}
        >
          About
        </Link>
        <Link 
          to="/audio-archives" 
          class="menu-link"
          onClick={()=>props.toggleSandwichMenu()}
        >
          Audio Archives
        </Link>
        <Link 
          to="/ena-calendar" 
          class="menu-link"
          onClick={()=>props.toggleSandwichMenu()}
        >
          ENA Community Calendar
        </Link>
        <Link 
          to="/tech-calendar" 
          class="menu-link"
          onClick={()=>props.toggleSandwichMenu()}
        >
          Grand Circus Tech Calendar
        </Link>
        <Link 
          to="/contact" 
          class="menu-link"
          onClick={()=>props.toggleSandwichMenu()}
        >
          Contact
        </Link>
      </div>

      <div className="sandwich-menu-footer">
        <span className="copyright">
          &copy;SlothWerks LLC
        </span>
      </div>

    </div>
  );

}
