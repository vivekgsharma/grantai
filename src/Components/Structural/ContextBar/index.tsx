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
import { useNavigate, Link } from "react-router-dom";

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
    <nav className="context-bar" style={{ top: visible ? "0" : "-65px" }}>
      <div className="context-bar-inner-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <div className="logo">
            <img src={Logo} alt="GrantAi logo" />
          </div>
          <img src={TextLogo} alt="GrantAi textlogo" />
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
          <Link
            className={`control-btn ${
              window.location.toString().includes("howitworks") && "active-btn"
            }`}
            to="/howitworks"
          >
            How it Works
          </Link>
          <Link
            className={`control-btn ${
              window.location.toString().includes("contact") && "active-btn"
            }`}
            to="/contact"
          >
            Contact
          </Link>
          <Link to="/wishlist" className="control-btn">
            Log in
            <img src={Enter} alt="Enter icon" />
          </Link>
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
            <Link
              type="button"
              className="control-btn"
              to="/howitworks"
              onClick={updateExpanedMenu}
            >
              How it Works
            </Link>
            <Link
              type="button"
              className="control-btn"
              to="/contact"
              onClick={updateExpanedMenu}
            >
              Contact
            </Link>
            <Link
              type="button"
              className="control-btn"
              to="/wishlist"
              onClick={updateExpanedMenu}
            >
              Log in
              <img src={Enter} alt="enter" />
            </Link>
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
    </nav>
  );
}
