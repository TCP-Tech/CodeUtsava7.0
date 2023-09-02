import React, { useState, useRef } from 'react';
import './Map.css';

const Map = () => {

  const [isMapVisible, setIsMapVisible] = useState(false);

  const mapButtonRef = useRef(null);
  const mapContainerRef = useRef(null);

  const handleMapButtonMouseOver = () => {
    setIsMapVisible(true); 
  };

  const handleMapButtonMouseOut = () => {
    setIsMapVisible(false);
  };

  const handleMapMouseOver = () => {
    setIsMapVisible(true); 
  };

  const handleMapMouseOut = () => {
    setIsMapVisible(false); 
  };

  // render
  const mapClasses = `map ${isMapVisible ? 'show-map' : 'hide-map'}`;

  return (
    <div className="map-container">
      <div
        className="map-btn"
        onMouseOver={handleMapButtonMouseOver}
        onMouseOut={handleMapButtonMouseOut}
        ref={mapButtonRef}
      >
        <span className="material-symbols-outlined">distance</span>
        <a
          href="https://www.google.com/maps/place/CCC+NIT+Raipur/@21.24996,81.606388,15z/data=!4m6!3m5!1s0x3a28dd4e5d1769d3:0xb1134051e16f6178!8m2!3d21.2499596!4d81.6063876!16s%2Fg%2F11j7f94t62?hl=en&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Venue</li>
        </a>
      </div>
      
      <div
        className={mapClasses}
        onMouseOver={handleMapMouseOver}
        onMouseOut={handleMapMouseOut}
        ref={mapContainerRef}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.542965513324!2d81.60381267595187!3d21.249964580142944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd4e5d1769d3%3A0xb1134051e16f6178!2sCCC%20NIT%20Raipur!5e0!3m2!1sen!2sin!4v1693652233129!5m2!1sen!2sin"
          width="300"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
