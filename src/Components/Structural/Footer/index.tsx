import React from "react";
import ByPrepaire from "assets/img/byPrepaire.png";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <img src={ByPrepaire} alt="logo" />
      <div className="footer-contents-container">
        <div className="address">
          <div className="title">Address</div>
          <div className="address-contents">
            <p>Prepaire Global Holdings</p>
            <p>IRENA Building - Masdar City - Abu Dhabi</p>
            <p>United Arab Emirates</p>
          </div>
        </div>
        <div className="company">
          <p>Company</p>
          <a href="https://www.prepaire.com/developers">Developers</a>
          <a href="https://www.prepaire.com/Mission">Mission</a>
          <a href="https://www.prepaire.com/biotune">Biotune</a>
        </div>
        <div className="contact">
          <p>Contact</p>
          <a
            onClick={() => (window.location.href = "mailto:sales@prepaire.com")}
          >
            sales@prepaire.com
          </a>
          <a
            onClick={() =>
              (window.location.href = "mailto:developers@prepaire.com")
            }
          >
            developers@prepaire.com
          </a>
          <a
            onClick={() =>
              (window.location.href = "mailto:investor@prepaire.com")
            }
          >
            investors@prepaire.com
          </a>
        </div>
      </div>
    </div>
  );
}
