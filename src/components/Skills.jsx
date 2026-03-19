import { useState } from "react";
import Particles from "./Particles";

const skillsData = [
  { label: "Communication Skills", value: 94 },
  { label: "Leadership Skills", value: 96 },
  { label: "Problem Solving", value: 95 },
  { label: "Adaptability", value: 92 },
  { label: "Teamwork", value: 98 },
  { label: "Critical Thinking", value: 94 },
];

export default function Skills() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < skillsData.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section id="skills" className="skills-section dark-canvas">
      <Particles />

      <div className="skills-wrapper">
        <h2 className="skills-title">Skills</h2>

        <p className="skills-desc">
          I am an aspiring Software Engineer with hands-on experience in AI,
          web technologies, and data analytics. I’m driven by curiosity,
          passionate about building intelligent systems, and continuously
          exploring how technology can solve real-world challenges.
        </p>

        <div className="skills-carousel">
          <button className="nav-arrow" onClick={prev}>‹</button>

          <div className="skills-viewport">
            <div
              className="skills-track"
              style={{ transform: `translateX(-${index * 360}px)` }}
            >
              {skillsData.map((skill) => (
                <div className="skill-item" key={skill.label}>
                  <svg width="200" height="200">
                    <circle cx="100" cy="100" r="85"
                      stroke="#1f2937" strokeWidth="12" fill="none" />
                    <circle cx="100" cy="100" r="85"
                      stroke="url(#grad)" strokeWidth="12" fill="none"
                      strokeDasharray="534"
                      strokeDashoffset={
                        534 - (534 * skill.value) / 100
                      }
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="grad">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="skill-percent">{skill.value}%</span>
                  <p className="skill-label">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-arrow" onClick={next}>›</button>
        </div>
      </div>
    </section>
  );
}
