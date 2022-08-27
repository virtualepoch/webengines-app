import React from "react";
import mainLogo from "../logos/jsive-logo-at-100.png";

export default function Footer() {
  var styles = {
    footer: {
      width: "100%",
      height: "fit-content",
      padding: "100px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    footerText: {
      width: "222px",
      height: "222px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "magenta",
      font: "100 clamp(1rem, 5vw, 1.2rem) Lorea",
      borderRadius: "50%",
      boxShadow: "0 5px 5px 5px rgb(0, 0, 0, 0.2), inset 0 -7px 22px 8px rgb(0, 0, 183)",
      background: "url(" + mainLogo + ") 50%/50% no-repeat, radial-gradient(circle at 60% 30%, rgb(255, 255, 255, 0.7) 5%, rgba(18, 74, 164, 0.9), rgba(31, 31, 255, 0.5), black 98%)",
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>www.JavaScriptive.com</p>
    </footer>
  );
}