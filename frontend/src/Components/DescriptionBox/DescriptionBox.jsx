import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionBox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over tha internet service as a virtual
          marketplace where business and individual showcase their products,
          interact with customers, and conduct transactions without the need of
          a physical presence. E-commerce websites have gained immense
          popularity due to their convenient accessibility, and the global reach
          they offer.
        </p>
        <p>
          E-commerce website typically display products or services a detailed
          descriptions, images, prices, and any available (e.g., size, colors).
          Each product usually has its own dedicated with relevant information
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
