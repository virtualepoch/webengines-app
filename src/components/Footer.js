import React from "react";
import mainLogo from "../assets/logos/webengines-100.png";

export function Footer() {
  var styles = {
    footer: {
      width: "100%",
      minHeight: "calc(100vh - 20px)",
      padding: "100px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    footerText: {
      width: "222px",
      height: "222px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      paddingBottom: "40px",
      color: "white",
      letterSpacing: "1px",
      font: "100 clamp(1rem, 5vw, 1.2rem) sans-serif",
      borderRadius: "50%",
      boxShadow: "0 5px 5px 5px rgb(0, 0, 0, 0.2), inset 0 -7px 22px 8px var(--color-2)",
      background: "url(" + mainLogo + ") 50% 40%/40% no-repeat, radial-gradient(circle at 60% 30%, rgb(255, 255, 255, 0.7) 5%, var(--color-3-op5), var(--color-2-op5), black 98%)",
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>webengines.org</p>
    </footer>
  );
}
