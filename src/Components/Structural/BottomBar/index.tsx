import React from "react";
import XIcon from "assets/svg/xicon.svg";
import Instagram from "assets/svg/instagram.svg";
import Linkedin from "assets/svg/linkedin.svg";
import Dot from "assets/svg/dot.svg";
import "./style.scss";

export default function BottomBar() {
  return (
    <div className="bottom-bar-container">
      <div className="social-container">
        <a
          href="https://twitter.com/prepaire_labs?lang=en "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={XIcon} alt="xicon" />
        </a>
        <a
          href="https://www.instagram.com/prepaire_labs/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="instagram" />
        </a>
        <a
          href="https://ie.linkedin.com/company/prepaire-labs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="linkedin" />
        </a>
      </div>
      <h4>Copyright © 2023 Prepaire Labs Inc. All rights reserved.</h4>
      <div className="terms-container">
        <a href="https://app.termly.io/document/terms-of-service/fb3569e8-7a0f-4c89-8a4f-0a9bbbcde184">
          Terms of service
        </a>
        <img src={Dot} alt="dot" />
        <a href="https://app.termly.io/document/privacy-policy/c26544c0-fecf-417b-9648-3aa50e9054e0">
          Privacy policy
        </a>
      </div>
    </div>
  );
}
