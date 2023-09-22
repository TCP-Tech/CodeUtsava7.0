import React, { useEffect } from "react";

import "./GalleryCard.css";

const GalleryCard = ({ isOpen, onClose, children }) => {
  //to hanle the outside clicks,image will close if user clicks outside of the image
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("codeutsava__gallery-modal-overlay")) {
      onClose(); // Close the modal when clicking on the overlay
    }
  };
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Render the modal only if isOpen is true
  if (!isOpen) return null;
  const modalClassname = isOpen ? "codeutsava__gallery-modal-overlay open" : "codeutsava__gallery-modal-overlay";
  return (
    <div className={modalClassname}>
      <div className="codeutsava__gallery-modal-content">{children}</div>
      <button className="codeutsava__gallery-close-button" onClick={onClose}></button>
    </div>
  );
};

export default GalleryCard;
