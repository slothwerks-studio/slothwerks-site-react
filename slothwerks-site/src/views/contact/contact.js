import React, { useState, Fragment } from 'react';

/* 
  Component Description:
    This is the contact screen view.

  Incoming Props:
    None
*/

export default function Contact() {

  return (
    <div className="Contact">
      <h2 className="page-heading">
        <span className="heading-text">Contact SlothWerks</span>
        <span className="heading-divider"></span>
      </h2>
      <div className="contact-text-wrapper">
        <p className="contact-text">
          Contact SlothWerks by phone at <a href="tel:+16162586179">616.258.6179</a> or by email at <a href="mailto:contact@slothwerks.com">contact@slothwerks.com</a>.
        </p>
      </div>
      <div className="contact-buttons-wrapper">
        <button type="button" className="contact-button">
          <a href="tel:+16162586179">
            <img
              className="contact-button-icon"
              src={require('../../assets/icons/call-black.png')} 
            />
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="mailto:contact@slothwerks.com">
            <img
              className="contact-button-icon"
              src={require('../../assets/icons/email-black.png')} 
            />
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="https://calendly.com/slothwerks/coffee-meeting/" target="_blank">
            <img
              className="contact-button-icon"
              src={require('../../assets/icons/calendly-black.png')} 
            />
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="https://www.linkedin.com/in/slothwerks/" target="_blank">
            <img
              className="contact-button-icon"
              src={require('../../assets/icons/linkedin-black.png')} 
            />
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="https://github.com/slothwerks-studio" target="_blank">
            <img
              className="contact-button-icon"
              src={require('../../assets/icons/github-black.png')} 
            />
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="https://join.slack.com/t/slothwerks-studio/shared_invite/enQtNTE2MTU0NTkwMDAzLTNkYzhlNGIwMTM2YWU2NWQ0ZWI1MmUxMDFkY2I0NGY3N2EzYmVjNjg2OTlhYmNhZjQwZTBlZDRkMzdiYzQxODQ" target="_blank">
            <img
              className="contact-button-icon"
              src={require('../../assets/icons/slack-black.png')} 
            />
          </a>
        </button>
      </div>
    </div>
  );

}
