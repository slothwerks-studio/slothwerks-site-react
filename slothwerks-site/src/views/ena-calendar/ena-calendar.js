import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

/* 
  Component Description:
    This is the ENA calendar screen view.

  Incoming Props:
    None
*/

export default function ENACalendar() {

  return (
    <div className="ENA_Calendar">
      <h2 className="page-heading">
        <span className="heading-text">ENA Community Calendar</span>
        <span className="heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          SlothWerks maintains a calendar of family-free (and usually free) community events occurring in the <a href="https://www.eastgategr.com/" target="_blank" rel="noopener">Eastgate neighborhood</a> and throughout the city of Grand Rapids, Michigan.
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
              <span className="calendar-button-icon">
                <i className="fas fa-external-link-alt"></i>
              </span>
              <span className="calendar-button-text">
                View Event Calendar
              </span>
            </div>
            <button type="button" className="action-button">
              <a 
                href="https://calendar.google.com/calendar/embed?src=g0kdapqkqpi4h880u3gnbtg7qg%40group.calendar.google.com&ctz=America%2FNew_York" 
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
                href="https://calendar.google.com/calendar?cid=ZzBrZGFwcWtxcGk0aDg4MHUzZ25idGc3cWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" 
                target="_blank" 
                rel="noopener"
              >
                Add
              </a>
            </button>
          </div>
        </div>
        <div className="calendar-wrapper">
          <div className="calendar">
            <div className="calendar-controls">
              <a 
                href="https://calendar.google.com/calendar/embed?src=g0kdapqkqpi4h880u3gnbtg7qg%40group.calendar.google.com&ctz=America%2FNew_York" 
                target="_blank" 
                title="Open this calendar in a new window" 
                rel="noopener"
              >
                <span className="calendar-controls-icon">
                  <i className="fas fa-external-link-alt"></i>
                </span>
                New Window
              </a>
              <a 
                href="https://calendar.google.com/calendar?cid=ZzBrZGFwcWtxcGk0aDg4MHUzZ25idGc3cWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" 
                title="Make these events accessible in your personal calendar"
                target="_blank" 
                rel="noopener"
              >
                <span className="calendar-controls-icon">
                  <i className="far fa-calendar-plus"></i>
                </span>
                Add to Calendar
              </a>
            </div>
            <iframe 
              className="calendar-frame" 
              src="https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=uhj6b9q35gtr5c60ml7utsid80%40group.calendar.google.com&amp;color=%2323164E&amp;ctz=America%2FNew_York" 
              width="100%"
              height="600" 
              frameBorder="0" 
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  );

}
