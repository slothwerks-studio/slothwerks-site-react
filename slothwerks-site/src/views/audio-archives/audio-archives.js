import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

// Import components
import Audio_Archives_Card from './components/audio-archives-card';

/* 
  Component Description:
    This is the audio archives screen view.

  Incoming Props:
    None
*/

export default function AudioArchives() {

  // Set initial state
  // (No initial state)

  return (
    <div className="Audio_Archives">
      <h2 className="page-heading">
        <span className="heading-text">Audio Archives</span>
        <span className="heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          We have preserved certain selections from our audio archives.  <span className="italic">Please note: some content may not be suitable for all audiences.</span>
        </p>
      </div>
      <div className="audio-archives-wrapper">
        <Audio_Archives_Card
          image={require("../../assets/images/hack-show-2016.jpg")}
          imgAlt="Turntable and mixing board"
          title="The Sloth Psychedelic HACK! Show (2016 Vinyl Edition)"
          releaseDate="2016"
          totalTime="46 minutes"
          audioLocation="https://www.slothwerks.com/media/new/sloth-psychedelic-hack-show-2016.mp3"
        />
        <Audio_Archives_Card
          image={require("../../assets/images/psychedelic-breakfast.jpg")}
          imgAlt="Man eating stack of compact discs"
          title="Sloth's Psychedelic Breakfast"
          releaseDate="2007"
          totalTime="55 minutes"
          audioLocation="https://www.slothwerks.com/media/new/sloth-psychedelic-breakfast.mp3"
        />
        <Audio_Archives_Card
          image={require("../../assets/images/arabian-nights.jpg")}
          imgAlt="Illustration of dancing women"
          title="1001 Arabian Nights"
          releaseDate="2005"
          totalTime="55 minutes"
          audioLocation="https://www.slothwerks.com/media/new/1001-arabian-nights.mp3"
        />
        <Audio_Archives_Card
          image={require("../../assets/images/arco-iris.jpg")}
          imgAlt="Dimly-lit room with people and equipment"
          title="1001 Arabian Nights"
          releaseDate="1999"
          totalTime="70 minutes"
          audioLocation="https://www.slothwerks.com/media/new/live-at-arco-iris.mp3"
        />
      </div>
    </div>
  );

}
