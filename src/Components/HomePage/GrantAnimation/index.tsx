import React from "react";
import GrantVideo from "assets/animation/grant.mp4";
import "./style.scss";
import { Link } from "react-router-dom";

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
          <Link className="action-button" to="/wishlist">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
