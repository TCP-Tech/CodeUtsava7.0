import React from "react";
import "./ContactForm.css";
import { useState, useRef } from "react";

const ContactForm = () => {
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null); 
  const emailInputRef = useRef(null); 
  const messageInputRef = useRef(null); 
  const form = useRef(null);
  const [sentT, setSentT] = useState("Submit");
  const focusInput = (inputRef) => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    var emailData = {
      service_id: "service_y25o3tu",
      template_id: "TCP-Tech_Response",
      user_id: "kE8yPfFnAkGs6aRJk",
      template_params: {
        person_name: form.current.name.value,
        mobile_no: form.current.contact.value,
        email_id: form.current.email.value,
        message: form.current.message.value,
      },
    };
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    }).then(
      (response) => {},
      (err) => {}
    );
    setSentT("Whoosh! Done");
    console.log(form.current.name);
  };

  const handleClick = (e) => {
      const clickedElement = e.target;
  
      if (clickedElement.tagName === "INPUT" || clickedElement.tagName === "TEXTAREA") {
        // If the clicked element is an <input> element, focus on it.
        let inputRef = null;
        if(clickedElement === nameInputRef.current){
          inputRef = nameInputRef;
        }else if(clickedElement === phoneInputRef.current){
          inputRef = phoneInputRef;
        }else if(clickedElement===emailInputRef.current){
          inputRef = emailInputRef;
        }else if(clickedElement===messageInputRef.current){
          inputRef = messageInputRef;
        }
        focusInput(inputRef);
      }
  }
  return (
    <div className="codeutsava__contact-section">
      <div className="codeutsava__contact-form">
        <div className="codeutsava__contact-header">Contact Us</div>
        <form ref={form} onSubmit={handleButtonClick} onClick={handleClick}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              required
              name="name"
              placeholder="Enter Your Name"
              ref={nameInputRef}
              onClick={focusInput(nameInputRef)}
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              required
              type="text"
              placeholder="Enter Your Phone Number"
              name="contact"
              ref={phoneInputRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter Your Email"
              ref={emailInputRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Enter Your Message Here"
              rows="4"
              cols="4"
              ref={messageInputRef}
            ></textarea>
          </div>
          <input
            type="submit"
            value={sentT}
            className="codeutsava__contact-submit-button"
          ></input>
        </form>
      </div>
      <div className="map-container">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.542965513324!2d81.60381267595187!3d21.249964580142944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd4e5d1769d3%3A0xb1134051e16f6178!2sCCC%20NIT%20Raipur!5e0!3m2!1sen!2sin!4v1693900472097!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
