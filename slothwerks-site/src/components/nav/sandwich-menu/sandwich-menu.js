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
    <div className="SandwichMenu">
      <div className="sandwich-menu-container">

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
              className="close-icon"
              src={require('../../../assets/icons/close-white.png')} 
            />
          </span>
        </div>

        <div className="sandwich-menu-links">
          <Link 
            to="/about" 
            className="menu-link"
            onClick={()=>props.toggleSandwichMenu()}
          >
            <span>About</span>
          </Link>
          <Link 
            to="/audio-archives" 
            className="menu-link"
            onClick={()=>props.toggleSandwichMenu()}
          >
            <span>Audio Archives</span>
          </Link>
          <Link 
            to="/ena-calendar" 
            className="menu-link"
            onClick={()=>props.toggleSandwichMenu()}
          >
            <span>ENA Community Calendar</span>
          </Link>
          <Link 
            to="/tech-calendar" 
            className="menu-link"
            onClick={()=>props.toggleSandwichMenu()}
          >
            <span>Grand Circus Tech Calendar</span>
          </Link>
          <Link 
            to="/contact" 
            className="menu-link"
            onClick={()=>props.toggleSandwichMenu()}
          >
            <span>Contact</span>
          </Link>
        </div>

        <div className="sandwich-menu-footer">
          <span className="copyright">
            &copy;SlothWerks LLC
          </span>
        </div>

      </div>
    </div>
  );

}
