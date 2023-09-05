import React from 'react';
import './ContactSection.css';

const ContactSection = () => {

  
  return (
    <div className="contact-section">
      <div className="container-inside">

          <div className="contact-form">
            <div className="contact-header">CONTACT</div>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-number">Contact Number</label>
                <input type="text" id="contact-number" name="contact" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" cols="4"></textarea>
              </div>
              <button type="submit">Submit</button>
          </form>
          </div>



          {/* MAP */}
          <div className="map-container">
              <iframe className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.542965513324!2d81.60381267595187!3d21.249964580142944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd4e5d1769d3%3A0xb1134051e16f6178!2sCCC%20NIT%20Raipur!5e0!3m2!1sen!2sin!4v1693900472097!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
    </div>
  );
};

export default ContactSection;
