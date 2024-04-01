import React from "react";
import GrantVideo from "assets/animation/grant.mp4";
import "./style.scss";

export default function GrantAnimation() {
  return (
    <div className="GrantAnimation-outter-container">
      <div className="GrantAnimation-container">
        <video muted autoPlay={true} loop={true} playsInline>
          <source src={GrantVideo} type="video/mp4" />
        </video>
        <div className="navigation-button-container">
          <h2>
            Let us <strong>Grant</strong> your wishes
          </h2>
          <a
            className="action-button"
            href="https://app.prepaire.com:5067/#/wishlist"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
