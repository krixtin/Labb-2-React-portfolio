import { useState, useEffect } from "react";

function Footer() {
  const [bgChanged, setBgChanged] = useState(() => localStorage.getItem("bgChanged") === "true");

  useEffect(() => {
    if (bgChanged) {
      document.body.classList.add("background2");
    } else {
      document.body.classList.remove("background2");
    }
    localStorage.setItem("bgChanged", bgChanged);
  }, [bgChanged]);

  return (
    <footer>
      <ul>
        <li>
          Upphovsrätt{" "}
          <span className="toggle-bg" onClick={() => setBgChanged(!bgChanged)}>©</span>
          {" "}2026 Kris Ahnlund
        </li>
        <li><a href="mailto:kristin@keatext.se">Mejla mig</a></li>
        <li>
          <a href="https://www.linkedin.com/in/kris-ahnlund-27555749/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/krixtin" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;