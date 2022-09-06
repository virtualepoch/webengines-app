import React, { useRef } from "react";

export default function ToTopBtn() {
  const toTopBtn = useRef(null);

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      toTopBtn.current.style.transform = "scale(1)";
    } else {
      toTopBtn.current.style.transform = "scale(0)";
    }
  };

  function ScrollToTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }

  var styles = {
    toTopBtn: {
      width: "40px",
      height: "40px",
      position: "fixed",
      right: "15px",
      bottom: "40px",
      zIndex: 8888,
      borderRadius: "50%",
      boxShadow: "-1px 1px 3px 1px rgb(0, 0, 0, 0.3)",
      background: "white",
      cursor: "pointer",
      transform: "scale(0)",
      transition: "all 100ms linear",
    },
    arrowLine: {
      width: "12px",
      height: "2px",
      position: "absolute",
      top: "17px",
      left: "11px",
      background: "rgb(100, 100, 100)",
      transform: "rotate(-45deg)",
      // pointerEvents: "none",
    },
    arrowLine2: {
      left: null,
      right: "10px",
      transform: "rotate(45deg)",
    },
  };

  return (
    <div className="to-top-btn" style={styles.toTopBtn} ref={toTopBtn} onClick={ScrollToTop}>
      <div style={styles.arrowLine}></div>
      <div style={{ ...styles.arrowLine, ...styles.arrowLine2 }}></div>
    </div>
  );
}
