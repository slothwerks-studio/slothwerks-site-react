import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

/* 
  Component Description:
    This is the home screen view.

  Incoming Props:
    None
*/

export default function Home() {

  // Set initial state
  const [redirectLocation, setRedirectLocation] = useState(null);

  // Run this only after mounting this component
  // Only used when someone attempts to access the site using
  // an external URL prior to React Router spinning up
  useEffect(() => {
    // Get current window URL
    const currentUrl = window.location.href;
    console.log(currentUrl);
    if (currentUrl.includes("/about")) {
      setRedirectLocation(<Redirect to="/about" />);
    } else if (currentUrl.includes("/tech-calendar")) {
      setRedirectLocation(<Redirect to="/tech-calendar" />);
    } else if (currentUrl.includes("/ena-calendar")) {
      setRedirectLocation(<Redirect to="/ena-calendar" />);
    } else if (currentUrl.includes("/audio-archives")) {
      setRedirectLocation(<Redirect to="/audio-archives" />);
    } else if (currentUrl.includes("/contact")) {
      setRedirectLocation(<Redirect to="/contact" />);
    }
  }, []);

  return (
    <div className="Home">
      { redirectLocation }
      <div className="splash-wrapper">
        <div className="splash-text">
          <span>Code.</span>
          <span>Communication.</span>
          <span>Community.</span>
        </div>
        <div className="splash-logo-container">
          <img
            className="splash-logo"
            src={require('../../assets/images/logo-image-only.png')} 
            alt="SlothWerks Logo"
          />
        </div>
      </div>
    </div>
  );

}
