import React, { useState, Fragment } from 'react';
import { Route, Switch, Link } from "react-router-dom";

// Import router
import Router from './router/router';

// Import components
import Header from './components/structural/header/header';
import Footer from './components/structural/footer/footer';
import SandwichMenu from './components/nav/sandwich-menu/sandwich-menu';

/* 
  Component Description:
    This is the top-level component of the site.

  Incoming Props:
    None
*/

export default function App() {

  // Set initial state
  const [showSandwichMenu, setShowSandwichMenu] = useState(false);

  // Build callback function to toggle sandwich menu
  const toggleSandwichMenu = () => {
    setShowSandwichMenu(!showSandwichMenu);
  }

  return (
    <Fragment>
      {/* Insert absolutely-positioned sandwich menu here */}
      <SandwichMenu 
        visibility={showSandwichMenu}
        toggleSandwichMenu={toggleSandwichMenu} 
      />
      {/* (showSandwichMenu) ?
        <SandwichMenu toggleSandwichMenu={toggleSandwichMenu} />
      :
        null
      */}
      {/* Insert sticky header here */}
      <Header toggleSandwichMenu={toggleSandwichMenu} />
      {/* Insert router here */}
      <Router />
      {/* Insert footer here */}
      <Footer />
    </Fragment>
  );

}
