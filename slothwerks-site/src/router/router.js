import React from 'react';
import { Route, Switch } from "react-router-dom";

// Import view components
import Home from '../views/home/home';
import About from '../views/about/about';
import Tech_Calendar from '../views/tech-calendar/tech-calendar';
import ENA_Calendar from '../views/ena-calendar/ena-calendar';
import Audio_Archives from '../views/audio-archives/audio-archives';
import Contact from '../views/contact/contact';

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
      <Route path="/tech-calendar" component={Tech_Calendar} />
      <Route path="/ena-calendar" component={ENA_Calendar} />
      <Route path="/audio-archives" component={Audio_Archives} />
      <Route path="/contact" component={Contact} />
      {/* If none of the above match, auto-route to home view */}
      <Route component={Home} />
    </Switch>
  );

}
