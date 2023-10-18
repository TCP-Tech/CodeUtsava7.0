import React, { useState } from "react";
import "./MerchandiseCard.css";
import pic1 from "../../assets/images/merchandise/2.png";
import pic2 from "../../assets/images/merchandise/3.png";
import pic3 from "../../assets/images/merchandise/4.png";

const MerchandiseCard = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const images = [pic2, pic3, pic1];
  return (
    <div className="codeutsava__merchandise-container">
      <div className="codeutsava__merchandise-left">
        <div className="codeutsava__merchandise-img-container">
          <img src={images[0]} onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} onClick={(e) => setSelectedImg(2)} />
        </div>
        <div className="codeutsava__merchandise-main-img-container">
          <img src={images[selectedImg]} />
        </div>
      </div>
      <div className="codeutsava__merchandise-right">
        <div>
          <h1>Official Merchanise - CU7.0</h1>
          <h3>Grab yours one Now!</h3>
        </div>
        <div>
          <p>Price (Customised): ₹499 /-</p>
          <p>Price (Non-Customised): ₹449 /-</p>
          <p>Special Offer</p>
          <p>Buy 3 Get ₹100 /- OFF</p>
          <p>Buy 5 Get ₹250 /- OFF</p>
          <p>Buy 10 Get ₹600 /- OFF</p>
          <p>Sizes Available: XS, S, M, L, XL</p>
          <p>Disclaimer: Delivery Available Only in Raipur.</p>
        </div>
        <a
          className="codeutsava__merchandise-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnFe_Zm97Of15Hs2UH9V-mIoiQz8rSggj48y41ekjKkcSj7g/viewform"
          target="__blank"
        >
          Buy Now!
        </a>
      </div>
    </div>
  );
};

export default MerchandiseCard;
