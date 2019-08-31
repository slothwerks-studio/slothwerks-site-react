import React, { useState, Fragment } from 'react';

/* 
  Component Description:
    This is the home screen view.

  Incoming Props:
    None
*/

export default function Home() {

  // Set initial state
  // (No initial state)

  return (
    <div className="Home">
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
          />
        </div>
      </div>
    </div>
  );

}
