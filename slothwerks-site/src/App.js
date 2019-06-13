import React, { useState, Fragment } from 'react';
import { Route, Switch, Link } from "react-router-dom";

// Import view components
import Home from './views/home/home';
import About from './views/about/about';

/* 
  Component Description:
    This is the top-level component of the site.

  Incoming Props:
    None
*/

export default function app() {

  return (
    <Fragment>
      {/* Insert absolutely-positioned sandwich menu here */}
      {/* Insert sticky header here */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      {/* Views should go inside switch */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/contact" component={Contact} />
        <Route path="/media-archives" component={Media_Archives} />
        <Route path="/tech-calendar" component={Tech_Calendar} />
        <Route path="/ena-calendar" component={ENA_Calendar} /> */}
        {/* <Route component={Error_404} /> */}
      </Switch>
      {/* Insert footer here */}
    </Fragment>
  );

}
