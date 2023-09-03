import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className='map-section'>
      <div className="map-container">
        <div className="map-font">MAP</div>
        <div className="map">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.542965513324!2d81.60381267595187!3d21.249964580142944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd4e5d1769d3%3A0xb1134051e16f6178!2sCCC%20NIT%20Raipur!5e0!3m2!1sen!2sin!4v1693652233129!5m2!1sen!2sin"
            width="400"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Map
