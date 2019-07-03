import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

/* 
  Component Description:
    This is an audio archives card container.

  Incoming Props:
    - image - use this as img src
    - imageAlt (String)
    - title (String)
    - releaseDate (String)
    - totalTime (String)
    - audioLocation (String)
*/

export default function Audio_Archives_Card(props) {

  return (
    <div className="audio-archives-card-container">
      <div className="audio-archives-card-info-container">
        <div className="audio-archives-card-image-container">
          <img 
            className="audio-archives-card-image"
            src={props.image} 
            alt={props.imageAlt}
          />
        </div>
        <div className="audio-archives-card-info">
          <span className="audio-archives-card-title">
            {props.title}
          </span>
          <span className="audio-archives-info-text">
            <span className="bold">Released:</span> {props.releaseDate}
          </span>
          <span className="audio-archives-info-text">
            <span className="bold">Total Time:</span> {props.totalTime}
          </span>
        </div>
      </div>
      <div class="audio-player">
        <audio controls className="audio-controls">
          <source src={props.audioLocation} type="audio/mp3" />
          <p class="no-audio-support">
            Your browser doesn't support HTML5 audio. Access the source file directly <a href="https://www.slothwerks.com/media/new/sloth-psychedelic-hack-show-2016.mp3">here</a>.
          </p>
        </audio>
      </div>
    </div>
  );

}
