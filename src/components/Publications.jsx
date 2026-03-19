import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import research from "../assets/publications/research.png";
import Particles from "./Particles";
export default function Publications() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
  document.body.style.overflow = selected ? "hidden" : "auto";
}, [selected]);
  


  return (
    <section id="publications" className="publications-section dark-canvas">
      <Particles />

      <h2 className="section-title">Publications</h2>

      <div className="publications-container">

        <div
          className="publication-card"
          onClick={() => setSelected(research)}
        >

          <img src={research} alt="Research" />

          <div className="publication-content">
            <h3>AI-Based Financial Intelligence System</h3>

            <p>
              A research-oriented system integrating AI-driven analytics,
              financial data processing, and intelligent recommendation systems
              for expense management and financial insights.
            </p>

            <span>Conference / Journal Publication</span>
          </div>

        </div>

      </div>

      {/* POPUP */}
      {selected &&
  createPortal(
    <div className="overlay" onClick={() => setSelected(null)}>
      
      <span className="close-btn" onClick={() => setSelected(null)}>✖</span>

      <img
        src={selected}
        alt="preview"
        onClick={(e) => e.stopPropagation()}
      />

    </div>,
    document.body
  )}

    </section>
  );
}