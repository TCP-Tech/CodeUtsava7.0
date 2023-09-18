import React, { useEffect } from "react";
import "./modal.css";
const Modal = ({ isOpen, onClose, children }) => {
  //to hanle the outside clicks,image will close if user clicks outside of the image
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
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
  const modalClassname = isOpen ? "modal-overlay open" : "modal-overlay";
  return (
    <div className={modalClassname}>
      <div className="modal-content">{children}</div>
      <button className="close-button" onClick={onClose}></button>
    </div>
  );
};

export default Modal;
