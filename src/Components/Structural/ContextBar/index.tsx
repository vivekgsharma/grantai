import React, { useState, useEffect } from "react";
import Logo from "assets/svg/logo.svg";
import TextLogo from "assets/svg/textLogo.svg";
import Enter from "assets/svg/enter.svg";
import Menu from "assets/svg/menu.svg";
import Cross from "assets/svg/cross.svg";
import { HashLink } from "react-router-hash-link";
import XIcon from "assets/svg/xicon.svg";
import Instagram from "assets/svg/instagram.svg";
import Linkedin from "assets/svg/linkedin.svg";
import Prepaire from "assets/svg/prepaire.svg";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export default function ContextBar() {
  const [showExpanedMenu, setShowExpanedMenu] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(prevScrollPos - currentScrollPos > 0 || currentScrollPos < 10);

    if (prevScrollPos < currentScrollPos) setShowExpanedMenu(false);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const updateExpanedMenu = () => {
    setShowExpanedMenu(!showExpanedMenu);
  };

  return (
    <div className="context-bar" style={{ top: visible ? "0" : "-65px" }}>
      <div className="context-bar-inner-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <img src={TextLogo} alt="textlogo" />
        </div>
        <div className="control-btn-group-container">
          <HashLink
            to={"/#platform"}
            smooth={true}
            className={`control-btn ${
              window.location.toString().includes("platform") && "active-btn"
            }`}
          >
            The Platform
          </HashLink>
          <a
            className={`control-btn ${
              window.location.toString().includes("howitworks") && "active-btn"
            }`}
            href="/howitworks"
          >
            How It Works
          </a>
          <a
            className={`control-btn ${
              window.location.toString().includes("contact") && "active-btn"
            }`}
            href="/contact"
          >
            Contact
          </a>
          <a
            href="https://app.prepaire.com:5067/#/login"
            className="control-btn"
          >
            Login
            <img src={Enter} alt="enter" />
          </a>
        </div>
        <button type="button" className="menu-btn" onClick={updateExpanedMenu}>
          {showExpanedMenu ? (
            <img src={Cross} alt="cross" />
          ) : (
            <img src={Menu} alt="menu" />
          )}
        </button>
      </div>
      {showExpanedMenu && (
        <div className="expand-menu-container">
          <div className="control-btn-group-container">
            <HashLink
              to={"/#platform"}
              smooth={true}
              className="control-btn"
              onClick={updateExpanedMenu}
            >
              The Platform
            </HashLink>
            <a
              type="button"
              className="control-btn"
              onClick={updateExpanedMenu}
            >
              How It Works
            </a>
            <a
              type="button"
              className="control-btn"
              onClick={updateExpanedMenu}
            >
              Contact
            </a>
            <a
              type="button"
              className="control-btn"
              href="https://app.prepaire.com:5067/#/login"
            >
              Login
              <img src={Enter} alt="enter" />
            </a>
          </div>
          <div className="bottom-contents">
            <div className="social-btns-container">
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
            <img src={Prepaire} alt="prepaire-logo" />
          </div>
        </div>
      )}
    </div>
  );
}
