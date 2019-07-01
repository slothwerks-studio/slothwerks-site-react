import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

/* 
  Component Description:
    This is the audio archives screen view.

  Incoming Props:
    None
*/

export default function Audio_Archives() {

  return (
    <div className="Audio_Archives">
      <h2 className="page-heading">
        <span className="page-heading-text">Audio Archives</span>
        <span className="page-heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          We have preserved certain selections from our audio archives.  <span className="italic">Please note: some content may not be suitable for all audiences.</span>
        </p>
      </div>
      <div className="audio-archives-wrapper">
        
      </div>
    </div>
  );

}
