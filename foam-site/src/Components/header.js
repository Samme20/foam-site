import React from "react";
import "./header.css";
import { IoIosHome, IoMdCart, IoIosBulb, IoMdApps } from "react-icons/io";
import { BrowserView, MobileView } from "react-device-detect";

import logoText from "../Images/logoText.png";

function Header() {
  return (
    <div className="header">
      <img className="logo-image" src={logoText} alt="Foam.io Logo" />

      <BrowserView>
        <div className="button-container">
          <h2>
            <IoIosHome /> Home
          </h2>
          <h2>
            <IoIosBulb /> About
          </h2>
          <h2>
            <IoMdCart /> Shop
          </h2>
        </div>
      </BrowserView>
      <MobileView>
      <div className="mobile-button-container">
        <h2 className="burger-menu"><IoMdApps /></h2>
        </div>
      </MobileView>
    </div>
  );
}

export default Header;
