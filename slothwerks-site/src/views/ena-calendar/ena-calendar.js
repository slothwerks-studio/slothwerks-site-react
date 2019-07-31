import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

/* 
  Component Description:
    This is the ENA calendar screen view.

  Incoming Props:
    None
*/

export default function ENA_Calendar() {

  return (
    <div className="ENA_Calendar">
      <h2 className="page-heading">
        <span className="heading-text">ENA Community Calendar</span>
        <span className="heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          SlothWerks maintains a calendar of family-free (and usually free) community events occurring in the <a href="https://www.eastgategr.com/" target="_blank">Eastgate neighborhood</a> and throughout the city of Grand Rapids, Michigan.
        </p>
      </div>
      <div className="sub-section-wrapper">
        <h3 className="sub-section-heading">
          About the Eastgate Neighborhood Association
        </h3>
        <p className="sub-section-text">
          The ENA serves the Plymouth Heights area in Grand Rapids and offers special event programming, community outreach, and neighborhood resources to ENA residents.
        </p>
        <div className="calendar-button-section">
          <div className="calendar-button-wrapper">
            <div className="calendar-button-text-container">
              <img
                className="calendar-button-image"
                src={require('../../assets/icons/external-link-black.png')} 
              />
              <span className="calendar-button-text">
                View Event Calendar
              </span>
            </div>
            <button type="button" className="action-button">
              <a href="https://calendar.google.com/calendar/embed?src=g0kdapqkqpi4h880u3gnbtg7qg%40group.calendar.google.com&ctz=America%2FNew_York" target="_blank">
                View Calendar
              </a>
            </button>
          </div>
          <div className="calendar-button-wrapper">
            <div className="calendar-button-text-container">
              <img
                className="calendar-button-image"
                src={require('../../assets/icons/calendar-add-black.png')} 
              />
              <span className="calendar-button-text">
                Add to Google Calendar
              </span>
            </div>
            <button type="button" className="action-button">
              <a href="https://calendar.google.com/calendar?cid=ZzBrZGFwcWtxcGk0aDg4MHUzZ25idGc3cWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" target="_blank">
                Add
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
