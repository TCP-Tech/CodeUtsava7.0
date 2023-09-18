import React, { useState } from "react";
import "./Section15.css";
import { motion } from "framer-motion";
import glimpses from "../../../../assets/data/glimpsesData";
import ghost from "../../../../assets/images/ghost.png";
import Modal from "./modal";
const Section15 = () => {
  const [activeId, setActiveId] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const onClick = (id) => setActiveId(id);
  //passing the clicked image to the modal 
  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section15"
      id="analytics"
    >
      <div className="codeutsava__section15-title">
        Glimpses
        <img src={ghost} alt="Ghost" />
      </div>
      <div className="codeutsava__section15-glimpses-container">
        {glimpses.map((card) => (
          
          <div
            key={card.id}
            className={`codeutsava__section15-glimpses-panel ${
              activeId === card.id ? "active" : ""
            }`}
            onClick={() => onClick(card.id)}
            style={{ backgroundImage: `url(${card.imgSrc})` }}
          >
            <div className={card.id%2==0?'codeutsava__section15-glimpses-panel-evenoverlay':'codeutsava__section15-glimpses-panel-oddoverlay'} onClick={() => openModal(card.imgSrc)} >
              Click
            </div>
          </div>
        ))}
      </div>

      {/* Rendering the modal,it is for that bigger image appearence with all that popping and closing functionality through a close button */}
      <Modal isOpen={selectedImage !== null} onClose={() => setSelectedImage(null)}>
        {selectedImage && <img src={selectedImage} alt="Larger Glimpse" />}
      </Modal>
    </motion.div>
  );
};

export default Section15;






