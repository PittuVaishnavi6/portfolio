import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Particles from "./Particles";

import ibm from "../assets/certificates/ibm.png";
import hackathon from "../assets/certificates/hackathon.png";
import workshop from "../assets/certificates/workshop.png";
import cisco from "../assets/certificates/cisco.png";

const certificates = [
  { title: "IBM SkillsBuild – Data Visualization Internship", image: ibm },
  { title: "Data Analytics Hackathon", image: hackathon },
  { title: "Data Analytics Workshop", image: workshop },
  { title: "Cisco BOOST 5.0 Cybersecurity Training", image: cisco },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  // ✅ LOCK SCROLL WHEN IMAGE OPENS
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <section id="certificates" className="dark-canvas">
      <Particles />

      <h2 className="section-title">Certifications</h2>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="cert-card"
            onClick={() => setSelected(cert.image)}
          >
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>

      {/* ✅ FULLSCREEN POPUP */}
      {selected &&
        createPortal(
          <div className="overlay" onClick={() => setSelected(null)}>
            
            <span
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              ✖
            </span>

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