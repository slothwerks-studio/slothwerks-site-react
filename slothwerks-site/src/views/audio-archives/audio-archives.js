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
        <div className="audio-archives-card-container">
          <div className="audio-archives-card-image-container">
            <img 
              className="audio-archives-card-image"
              src={require('../../assets/images/hack-show-2016.jpg')} 
              alt="Turntable and mixing board"
            />
          </div>
          <div className="audio-archives-card-info-container">
            <div className="audio-archives-card-info">
              <span className="audio-archives-card-title">
                The Sloth Psychedelic HACK! Show (2016 Vinyl Edition)
              </span>
              <span className="audio-archives-info-text">
                <span className="bold">Released:</span> 2016
              </span>
              <span className="audio-archives-info-text">
                <span className="bold">Total Time:</span> 46 minutes
              </span>
            </div>
            <div class="audio-player">
              <audio controls>
                <source src="https://www.slothwerks.com/media/new/sloth-psychedelic-hack-show-2016.mp3" type="audio/mp3" />
                <p class="no-audio-support">
                  Your browser doesn't support HTML5 audio. Access the source file directly <a href="https://www.slothwerks.com/media/new/sloth-psychedelic-hack-show-2016.mp3">here</a>.
                </p>
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
