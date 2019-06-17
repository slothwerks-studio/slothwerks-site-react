import React, { useState, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

// Import view components
import Home from '../views/home/home';
import About from '../views/about/about';

/* 
  Component Description:
    This is the primary React Router switch element which allows
    for dynamic rendering of the site sub-views.
    https://reacttraining.com/react-router/web/guides/quick-start

  Incoming Props:
    None
*/

export default function Router() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/contact" component={Contact} />
      <Route path="/media-archives" component={Media_Archives} />
      <Route path="/tech-calendar" component={Tech_Calendar} />
      <Route path="/ena-calendar" component={ENA_Calendar} /> */}
      {/* <Route component={Error_404} /> */}
    </Switch>
  );

}
