import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

/* 
  Component Description:
    This is the tech calendar screen view.

  Incoming Props:
    None
*/

export default function TechCalendar() {

  return (
    <div className="Tech_Calendar">
      <h2 className="page-heading">
        <span className="heading-text">Grand Circus Tech Calendar</span>
        <span className="heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          SlothWerks maintains a calendar of tech-related events occurring at <a href="https://www.grandcircus.co/grand-rapids-coding-bootcamp/" target="_blank" rel="noopener">Grand Circus</a> and throughout the downtown area of Grand Rapids, Michigan.
        </p>
      </div>
      <div className="sub-section-wrapper">
        <h3 className="sub-section-heading">
          About the Grand Circus
        </h3>
        <p className="sub-section-text">
          Grand Circus is a tech career training organization based in Detroit, Michigan.  They also maintain a campus at <a href="http://startgarden.com/" target="_blank" rel="noopener">Start Garden</a> in Grand Rapids.
        </p>
        <div className="calendar-button-section">
          <div className="calendar-button-wrapper">
            <div className="calendar-button-text-container">
              <span className="calendar-button-icon">
                <i className="fas fa-external-link-alt"></i>
              </span>
              <span className="calendar-button-text">
                View Event Calendar
              </span>
            </div>
            <button type="button" className="action-button">
              <a 
                href="https://calendar.google.com/calendar/embed?src=uhj6b9q35gtr5c60ml7utsid80%40group.calendar.google.com&ctz=America%2FNew_York" 
                target="_blank" 
                rel="noopener"
              >
                View Calendar
              </a>
            </button>
          </div>
          <div className="calendar-button-wrapper">
            <div className="calendar-button-text-container">
              <span className="calendar-button-icon">
                <i className="far fa-calendar-plus"></i>
              </span>
              <span className="calendar-button-text">
                Add to Google Calendar
              </span>
            </div>
            <button type="button" className="action-button">
              <a 
                href="https://calendar.google.com/calendar?cid=dWhqNmI5cTM1Z3RyNWM2MG1sN3V0c2lkODBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" 
                target="_blank" 
                rel="noopener"
              >
                Add
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
