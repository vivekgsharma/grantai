import React, { useState } from "react";
import Partner1 from "assets/img/partners/1.png";
import Partner2 from "assets/img/partners/2.png";
import Partner3 from "assets/img/partners/3.png";
import Partner4 from "assets/img/partners/4.png";
import Partner5 from "assets/img/partners/5.png";
import Partner6 from "assets/img/partners/6.png";
import Partner7 from "assets/img/partners/7.png";
import Partner8 from "assets/img/partners/8.png";
import Partner9 from "assets/img/partners/9.png";
import Partner10 from "assets/img/partners/10.png";
import Partner11 from "assets/img/partners/11.png";
import Partner12 from "assets/img/partners/12.png";
import Partner13 from "assets/img/partners/13.png";
import Partner14 from "assets/img/partners/14.png";
import Partner15 from "assets/img/partners/15.png";
import Partner16 from "assets/img/partners/16.png";
import Partner17 from "assets/img/partners/17.png";
import Partner18 from "assets/img/partners/18.png";
import "./style.scss";

export default function Partners() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const updateShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="partners-outter-container">
      <div className="partners-container">
        <p className="title">
          Our <span>Partners</span>
        </p>
        <p className="description">
          Our partners are at the forefront of innovation, driving advancements
          that transform healthcare.
        </p>
        <div className="partners-list-container">
          <div className="partner">
            <img src={Partner1} alt="partner" />
          </div>
          <div className="partner">
            <img src={Partner2} alt="partner" />
          </div>
          <div className="partner">
            <img src={Partner3} alt="partner" />
          </div>
          <div className="partner">
            <img src={Partner4} alt="partner" />
          </div>
          <div className="partner">
            <img src={Partner5} alt="partner" />
          </div>
          <div className="partner six-partner">
            <img src={Partner6} alt="partner" />
          </div>
          <div className="partner">
            <img src={Partner7} alt="partner" />
          </div>
          <div className="partner">
            <img src={Partner8} alt="partner" />
          </div>

          {showAll && (
            <>
              <div className="partner">
                <img src={Partner9} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner10} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner11} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner12} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner13} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner14} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner15} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner16} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner17} alt="partner" />
              </div>
              <div className="partner">
                <img src={Partner18} alt="partner" />
              </div>
            </>
          )}
        </div>
        <button type="button" onClick={updateShowAll}>
          {showAll ? "Collapse" : "Show all (18)"}
        </button>
      </div>
    </div>
  );
}
