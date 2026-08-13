import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";

function App() {
  const [pinkOpen, setPinkOpen] = useState(false);

  useEffect(() => {
    const keys = new Set();

    const handleKeydown = (e) => {
      if (e.key === "Escape") setPinkOpen(false);
      keys.add(e.key.toLowerCase());
      if (["p", "i", "n", "k"].every(k => keys.has(k))) {
        setPinkOpen(true);
        keys.clear();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-mig" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />

      {pinkOpen && (
        <div id="pink-modal" className="modal-overlay show" onClick={(e) => {
          if (e.target.classList.contains("modal-overlay") || e.target.classList.contains("modal-close")) {
            setPinkOpen(false);
          }
        }}>
          <div className="modal-box pink-modal-box">
            <button className="modal-close pink-modal-close" onClick={() => setPinkOpen(false)}>×</button>
            <p>Jag slår vad om att jag kan gissa din favoritfärg ... Hotpink, eller hur!?</p>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;