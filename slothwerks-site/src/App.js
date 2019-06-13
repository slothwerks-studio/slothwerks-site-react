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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Fragment>
  );

}
