import React from "react";
import { useState } from "react";
import "./Section16.css";
import downArrow from "../../../../assets/images/downArrow.svg";
import cauldron from "../../../../assets/images/cauldron.png";
import { motion } from "framer-motion";

const Section16 = () => {
  const [formData, setFormData] = useState({});
  const [sentT, setSentT] = useState("Send");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  var emailData = {
    service_id: "service_y25o3tu",
    template_id: "TCP-Tech_Response",
    user_id: "kE8yPfFnAkGs6aRJk",
    template_params: {
      person_name: formData.name,
      mobile_no: formData.contact,
      email_id: formData.email,
      message: formData.message,
    },
  };
  console.log(emailData);
  const handleButtonClick = (e) => {
    e.preventDefault();
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    }).then(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  console.log(formData);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__contact-container"
    >
      <div className="codeutsava__contact-title">
        Have Some Questions?
        <img src={cauldron} />
      </div>
      <div className="codeutsava__contact-section">
        <div className="codeutsava__contact-form">
          <div className="codeutsava__contact-header">Contact Us</div>
          <form onSubmit={handleButtonClick}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="codeutsava__contact-number">Contact Number</label>
              <input
                required
                type="text"
                onChange={handleChange}
                id="codeutsava__contact-number"
                name="contact"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                rows="4"
                cols="4"
              ></textarea>
            </div>
          </form>
          <button
            onClick={handleButtonClick}
            className="codeutsava__contact-submit-button"
          >
            <a>SUBMIT</a>
            <img src={downArrow} />
          </button>
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
    </motion.div>
  );
};

export default Section16;
