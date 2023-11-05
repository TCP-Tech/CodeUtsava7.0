import React, { useState } from "react";
import "./GameCard.css";
import game1 from "../../assets/images/games/game1.png";
import game2 from "../../assets/images/games/game2.png";
import game3 from "../../assets/images/games/game3.png";

const GameCard = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const images = [game1, game2, game3];
  return (
    <div className="codeutsava__game-container">
      <div className="codeutsava__game-left">
        <div className="codeutsava__game-img-container">
          <img src={images[0]} onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} onClick={(e) => setSelectedImg(2)} />
        </div>
        <div className="codeutsava__game-main-img-container">
          <img src={images[selectedImg]} />
        </div>
      </div>
      <div className="codeutsava__game-right">
        <div className="codeutsava__game-right-heading">
          <h1>Virtual Escape Room - The Cursed Mansion</h1>
        </div>
        <div className="codeutsava__game-right-content">
          <div className="codeutsava__game-right-special-prices">
            <h3>
              Our self designed <b>virtual escape room,</b> where participants
              must solve different puzzles in each level to escape and win.
            </h3>
          </div>
          <p>
            <b>Disclaimer:</b> Not for the <b>Weak.</b>
          </p>
        </div>
        <a
          className="codeutsava__game-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnFe_Zm97Of15Hs2UH9V-mIoiQz8rSggj48y41ekjKkcSj7g/viewform"
          target="__blank"
        >
          Click at your own Risk!
        </a>
      </div>
    </div>
  );
};

export default GameCard;
