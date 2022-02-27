import React from "react";

import HeartIcon from "../img/heart.svg";


import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        Made with &nbsp;
        <img src={HeartIcon} alt="love icon" width="4" height="4"/>

      </p>
    </footer>
  );
}

export default Footer;
