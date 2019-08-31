import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

/* 
  Component Description:
    This is the desktop version of the header navigation.

  Incoming Props:
    None
*/

export default function HeaderNavDesktop(props) {

  return (
    <nav className="HeaderNavDesktop">
      <div className="header-nav-link-list">
        <Switch>
          <Route path="/about">
            <Link to="/about" className="header-nav-link active">
              <span className="bold">
                About
              </span>
              <span className="header-nav-link-underline" />
            </Link>
          </Route>
          <Route path="*">
            <Link to="/about" className="header-nav-link">
              <span>
                About
              </span>
            </Link>
          </Route>
        </Switch>
        <Switch>
          <Route path="/audio-archives">
            <Link to="/audio-archives" className="header-nav-link active">
              <span className="bold">
                Audio<br />Archives
              </span>
              <span className="header-nav-link-underline" />
            </Link>
          </Route>
          <Route path="*">
            <Link to="/audio-archives" className="header-nav-link">
              <span>
                Audio<br />Archives
              </span>
            </Link>
          </Route>
        </Switch>
        <Switch>
          <Route path="/ena-calendar">
            <Link to="/ena-calendar" className="header-nav-link active">
              <span className="bold">
                ENA Community<br />Calendar
              </span>
              <span className="header-nav-link-underline" />
            </Link>
          </Route>
          <Route path="*">
            <Link to="/ena-calendar" className="header-nav-link">
              <span>
                ENA Community<br />Calendar
              </span>
            </Link>
          </Route>
        </Switch>        
        <Switch>
          <Route path="/tech-calendar">
            <Link to="/tech-calendar" className="header-nav-link active">
              <span className="bold">
                Grand Circus<br />Tech Calendar
              </span>
              <span className="header-nav-link-underline" />
            </Link>
          </Route>
          <Route path="*">
            <Link to="/tech-calendar" className="header-nav-link">
              <span>
                Grand Circus<br />Tech Calendar
              </span>
            </Link>
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route path="/contact">
          <span className="contact-icon-container">
            <img 
              className="contact-icon"
              src={require('../../../../assets/icons/contact-purple-hollow.png')} 
              alt="Contact SlothWerks"
            />
          </span>
        </Route>
        <Route path="*">
          <Link to="/contact" className="contact-icon-container">
            <img 
              className="contact-icon"
              src={require('../../../../assets/icons/contact-purple-filled.png')} 
              alt="Contact SlothWerks"
            />
            <img 
              className="contact-icon hover"
              src={require('../../../../assets/icons/contact-purple-hollow.png')} 
              alt="Contact SlothWerks"
            />
          </Link>
        </Route>
      </Switch>
    </nav>
  );

}
