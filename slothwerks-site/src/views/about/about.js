import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

/* 
  Component Description:
    This is the about screen view.

  Incoming Props:
    None
*/

export default function About() {

  // Set initial state
  // (No initial state)

  return (
    <div className="About">
      <h2 className="page-heading">
        <span className="heading-text">About SlothWerks</span>
        <span className="heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          Located in <a href="https://www.grandrapidsmi.gov/" target="_blank" rel="noopener">Grand Rapids, Michigan</a>, SlothWerks provides web and mobile application development and user experience consultation services.
        </p>
        <p className="content-text">
          We harness twenty years of technical experience to craft solutions for both commercial and non-profit clients throughout West Michigan.
        </p>
        <div className="action-button-wrapper">
          <button type="button" className="action-button">
            <Link to="/contact">Contact us!</Link>
          </button>
        </div>
      </div>
    </div>
  );

}
