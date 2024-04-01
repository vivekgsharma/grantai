import React, { useEffect, useRef } from "react";
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
            <a
              href="https://app.prepaire.com:5067/#/wishlist"
              className="action-button"
            >
              Get Started
            </a>
            <a className="action-button" href="/howitworks">
              How It Works
            </a>
          </div>
        </div>
        <img src={ByPrepaire} alt="logo" className="by-prepaire-logo" />
      </div>
    </section>
  );
}
