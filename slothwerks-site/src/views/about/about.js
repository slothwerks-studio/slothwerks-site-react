import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

/* 
  Component Description:
    This is the about screen view.

  Incoming Props:
    None
*/

export default function About() {

  return (
    <div className="About">
      <h2 className="page-heading">
        <span className="page-heading-text">About SlothWerks</span>
        <span className="page-heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          Located in <span className="bold">Grand Rapids, Michigan,</span> SlothWerks provides web and mobile application development and user experience consultation services.
        </p>
        <p className="content-text">
          We harness twenty years of technical experience to craft solutions for both commercial and non-profit clients throughout West Michigan.
        </p>
      </div>
      <div className="action-button-wrapper">
        <button type="button" className="action-button">
          <Link to="/contact">Contact us!</Link>
        </button>
      </div>
    </div>
  );

}
