import React, { useState, useEffect } from 'react';

/* 
  Component Description:
    This is the tech calendar screen view.

  Incoming Props:
    None
*/

export default function TechCalendar() {

  // Set initial state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [calendarFrameHeight, setCalendarFrameHeight] = useState(600);

  // We are controlling the width of the calendar iframe using
  // a wrapping DIV; height is controlled via JavaScript.

  // Add listener for window width after mounting; 
  // add returned function to remove listender upon unmounting
  useEffect(() => {
    // Define function to pass into event listener
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    // Define listener removal function
    function removeListener() {
      window.removeEventListener("resize", updateWindowWidth);
    }
    // Add window event listener for resizing of window;
    // will fire updateWindowWidth each time window size changes
    window.addEventListener("resize", updateWindowWidth);
    // Return listener removal function
    return removeListener;
  }, []);

  // Add useEffect that will run when windowWidth is updated
  // This will update the calendar height dynamically
  useEffect(() => {
    // Use 1366px as breakpoint for calendar height update
    let calendarHeight = 600;
    if (windowWidth >= 1366) {
      calendarHeight = 800;
    }
    setCalendarFrameHeight(calendarHeight);
  }, [windowWidth]);

  return (
    <main className="Tech_Calendar">
      <h2 className="page-heading">
        <span className="heading-text">Grand Rapids Tech Calendar</span>
        <span className="heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          SlothWerks maintains a calendar of tech-related events and meetups occurring in and around the downtown Grand Rapids, Michigan area.  The calendar is now also available as an app from <a href="https://play.google.com/store/apps/details?id=com.slothwerks.TechCalendar" target="_blank" rel="noopener noreferrer">Google Play</a>.
        </p>
      </div>
      <div className="sub-section-wrapper">
        <h3 className="sub-section-heading">
          About the Tech Calendar App
        </h3>
        <p className="sub-section-text">
          For both new and seasoned developers, finding ways to interact with the local creative community can sometimes be a challenge.  Launched to beta in just over three weeks, the SlothWerks Tech Calendar app was designed to help bridge the gap.  The app sources its event data from Google Calendar and uses Google Places to acquire location information and venue images.  Non-android users may access the app using <a href="https://expo.io/@slothwerks/tech-calendar" target="_blank" rel="noopener noreferrer">Expo</a>.
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
                title="Open this calendar in a new window"
                rel="noopener noreferrer"
              >
                View Calendar
              </a>
            </button>
          </div>
          <div className="calendar-button-wrapper">
            <div className="calendar-button-text-container">
              <span className="calendar-button-icon">
                <i className="fas fa-file-download"></i>
              </span>
              <span className="calendar-button-text">
                Download iCal ICS
              </span>
            </div>
            <button type="button" className="action-button">
              <a 
                href="https://calendar.google.com/calendar/ical/uhj6b9q35gtr5c60ml7utsid80%40group.calendar.google.com/public/basic.ics" 
                title="Download iCal *.ICS file"
              >
                Download
              </a>
            </button>
          </div>
        </div>
        <div className="calendar-wrapper">
          <div className="calendar">
            <div className="calendar-controls">
              <a 
                href="https://calendar.google.com/calendar/embed?src=uhj6b9q35gtr5c60ml7utsid80%40group.calendar.google.com&ctz=America%2FNew_York" 
                target="_blank" 
                title="Open this calendar in a new window" 
                rel="noopener noreferrer"
              >
                <span className="calendar-controls-icon">
                  <i className="fas fa-external-link-alt"></i>
                </span>
                New Window
              </a>
              <a 
                href="https://calendar.google.com/calendar/ical/uhj6b9q35gtr5c60ml7utsid80%40group.calendar.google.com/public/basic.ics" 
                title="Download iCal *.ICS file"
              >
                <span className="calendar-controls-icon">
                  <i className="fas fa-file-download"></i>
                </span>
                Download iCal ICS
              </a>
            </div>
            <iframe 
              title="Grand Rapids Tech Calendar"
              className="calendar-frame" 
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=uhj6b9q35gtr5c60ml7utsid80%40group.calendar.google.com&amp;color=%2323164E&amp;ctz=America%2FNew_York"
              width="100%"
              height={calendarFrameHeight}
              frameBorder="0" 
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </main>
  );

}
