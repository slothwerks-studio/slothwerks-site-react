import React from 'react';

/* 
  Component Description:
    This is the contact screen view.

  Incoming Props:
    None
*/

export default function Contact() {

  // Set initial state
  // (No initial state)

  return (
    <div className="Contact">
      <h2 className="page-heading">
        <span className="heading-text">Contact SlothWerks</span>
        <span className="heading-divider"></span>
      </h2>
      <div className="content-text-wrapper">
        <p className="content-text">
          Contact SlothWerks by phone at <a href="tel:+16162586179">616.258.6179</a> or by email at <a href="mailto:contact@slothwerks.com">contact@slothwerks.com</a>.
        </p>
      </div>
      <div className="contact-buttons-wrapper">
        <button type="button" className="contact-button">
          <a href="tel:+16162586179">
            <span className="contact-button-icon-container">
              <img 
                className="contact-button-icon"
                src={require('../../assets/icons/call-black.png')} 
                alt="Call SlothWerks"
              />
              <img 
                className="contact-button-icon hover"
                src={require('../../assets/icons/call-brown.png')} 
                alt="Call SlothWerks"
              />
            </span>
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="mailto:contact@slothwerks.com">
            <span className="contact-button-icon-container">
              <img 
                className="contact-button-icon"
                src={require('../../assets/icons/email-black.png')} 
                alt="Email SlothWerks"
              />
              <img 
                className="contact-button-icon hover"
                src={require('../../assets/icons/email-brown.png')} 
                alt="Email SlothWerks"
              />
            </span>
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="https://calendly.com/slothwerks/coffee-meeting/" target="_blank" rel="noopener noreferrer">
            <span className="contact-button-icon-container">
              <img 
                className="contact-button-icon"
                src={require('../../assets/icons/calendly-black.png')} 
                alt="Schedule a Coffee Meeting on Calendly"
              />
              <img 
                className="contact-button-icon hover"
                src={require('../../assets/icons/calendly-brown.png')} 
                alt="Schedule a Coffee Meeting on Calendly"
              />
            </span>
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="https://www.linkedin.com/in/slothwerks/" target="_blank" rel="noopener noreferrer">
            <span className="contact-button-icon-container">
              <img 
                className="contact-button-icon"
                src={require('../../assets/icons/linkedin-black.png')} 
                alt="SlothWerks on LinkedIn"
              />
              <img 
                className="contact-button-icon hover"
                src={require('../../assets/icons/linkedin-brown.png')} 
                alt="SlothWerks on LinkedIn"
              />
            </span>
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="https://github.com/slothwerks-studio" target="_blank" rel="noopener noreferrer">
            <span className="contact-button-icon-container">
              <img 
                className="contact-button-icon"
                src={require('../../assets/icons/github-black.png')} 
                alt="SlothWerks on GitHub"
              />
              <img 
                className="contact-button-icon hover"
                src={require('../../assets/icons/github-brown.png')} 
                alt="SlothWerks on GitHub"
              />
            </span>
          </a>
        </button>
        <button type="button" className="contact-button">
          <a href="https://join.slack.com/t/slothwerks-studio/shared_invite/enQtNTE2MTU0NTkwMDAzLTNkYzhlNGIwMTM2YWU2NWQ0ZWI1MmUxMDFkY2I0NGY3N2EzYmVjNjg2OTlhYmNhZjQwZTBlZDRkMzdiYzQxODQ" target="_blank" rel="noopener noreferrer">
            <span className="contact-button-icon-container">
              <img 
                className="contact-button-icon"
                src={require('../../assets/icons/slack-black.png')} 
                alt="SlothWerks Slack Workspace"
              />
              <img 
                className="contact-button-icon hover"
                src={require('../../assets/icons/slack-brown.png')} 
                alt="SlothWerks Slack Workspace"
              />
            </span>
          </a>
        </button>
      </div>
    </div>
  );

}
