import React, { useState } from "react";
import lightImage from "../../assets/img/sun.png";

const SwitchDark: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "dark");
      const body = document.querySelector("body");
      if (body) {
        body.classList.add("dark");
        body.classList.remove("light");
      }
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "light");
      const body = document.querySelector("body");
      if (body) {
        body.classList.add("light");
        body.classList.remove("dark");
      }
      setIsDark(true);
    }
  };

  return (
    <label className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
      />
      <div className="switch-handle">
        <span className="light-text">
          <img src={lightImage} alt="swicher" className="filter_1" />
        </span>
        <span className="dark-text">
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </span>
      </div>
    </label>
  );
};

export default SwitchDark;
