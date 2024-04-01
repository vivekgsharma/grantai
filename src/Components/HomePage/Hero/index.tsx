import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ByPrepaire from "assets/img/byPrepaire.png";
import HeroAnimation from "assets/animation/hero.mp4";
import "./style.scss";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <section className="hero-container">
      <div className="background-img-container">
        <video muted autoPlay={true} loop={true} playsInline>
          <source src={HeroAnimation} type="video/mp4" />
        </video>
        <div className="get-started-container">
          <h1 className="title">
            We will Grant your wishes. <strong>Literally</strong>.
          </h1>
          <h4 className="description">
            When it comes to fulfilling your project funding wishes,
            <strong> GrantAI</strong> ensures they become a reality.
          </h4>
          <div className="button-container">
            <Link to="/wishlist" className="action-button">
              Get Started
            </Link>
            <Link className="action-button" to="/howitworks">
              How It Works
            </Link>
          </div>
        </div>
        <img src={ByPrepaire} alt="logo" className="by-prepaire-logo" />
      </div>
    </section>
  );
}
